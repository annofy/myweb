const express = require('express'),
  config = require('config'),
  bodyParse = require('body-parser'),
  mongoose = require('mongoose'),
  margan = require('morgan'),
  path = require('path'),
  routes = require('./routes'),
  isDev = process.env.NODE_ENV !== 'production',
  port = process.env.PORT || config.get('port'),
  dbUrl = config.get('db.url'),
  utils = require('./utils/utils');


const app = express();
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'pug')
app.use(margan('dev'))
app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json())
// 设置mongoose
mongoose.Promise = global.Promise
mongoose.connect(dbUrl).then(
  () => {
    utils.logs('mongoose', '连接成功')
  },
  err => {
    utils.error('mongoose', err.message)
  }
)
if (isDev) {
  // webpack 配置
  const webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackDevConfig = require('../config/webpack.config.js'),
    http = require('http'),
    watch = require('watch'),
    reload = require('reload'),
    compiler = webpack(webpackDevConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
      colors: true
    }
  }))
  app.use(webpackHotMiddleware(compiler))
  routes(app)
  const server = http.createServer(app),
    reloadServer = reload(server, app);

  // 创建文件监视器
  watch.createMonitor(__dirname + '/views', {
    interval: 1,
    ignoreDirectoryPattern: /\/dev\/[.]+/
  }, monitor => {
    monitor.files[__dirname + '/views/**']
    monitor.on('changed', (f, curr, prev) => {
      console.log('[change] run on app')
      reloadServer.reload()
    })
  })

  server.listen(port, () => {
    console.log('app run on', port)
  })
} else {
  routes(app)
  app.use(express.static(path.join(__dirname, 'static')))

  app.listen(port, () => {
    console.log('app run on ' + port)
  })
}


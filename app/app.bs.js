const express = require('express'),
  config = require('config'),
  mongoose = require('mongoose'),
  margan = require('morgan'),
  path = require('path'),
  routes = require('./routes'),
  isDev = process.env.NODE_ENV !== 'production',
  port = process.env.PORT || config.get('port')
utils = require('./utils/utils');


const app = express();
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'pug')
app.use(margan('dev'))
// 设置mongoose
mongoose.Promise = global.Promise
if (isDev) {
  // webpack 配置
  const webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackDevConfig = require('../config/webpack.config.js'),
    http = require('http'),
    browsersync = require('browser-sync'),
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
  const bs = browsersync.create()
  // app.listen(port, () => {
  //   console.log('app(dev) run on 3000')
  // })
  bs.init({
    server: "./",
    open: false,
    middleware: [app],
    serveStaticOptions: {
      extensions: ["html"]
    }
  });
} else {
  routes(app)
  app.use(express.static(path.join(__dirname, 'static')))

  app.listen(port, () => {
    console.log('app run on ' + port)
  })
}


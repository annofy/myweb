const webpack = require('webpack'),
  path = require('path'),
  FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'),
  Visualizer = require('webpack-visualizer-plugin'),
  publicPath = 'http://localhost:3000/',
  hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true';

const devConfig = {
  entry: {
    scripts: ['./static/scripts', hotMiddlewareScript],
  },
  output: {
    filename: './[name]/bundle.js',
    path: path.resolve(__dirname, './static'),
    publicPath: publicPath
  },
  devtool: '#eval-source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        use: 'url-loader?limit=8192&context=client&name=[path][name].[ext]'
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
          'less-loader?sourceMap'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new FriendlyErrorsWebpackPlugin(),
    new Visualizer({
      filename: './visualizer.html'
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendors',
    //   minChunks: function(module, count) {
    //     return (
    //       module.resource &&
    //         /\.js$/.test(module.resource) &&
    //         module.resource.indexOf(
    //           path.join(__dirname, '../node_modules')
    //         ) === 0
    //     )
    //   }
    // })
  ]
}

module.exports = devConfig
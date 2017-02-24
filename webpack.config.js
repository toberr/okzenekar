var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')
var PrerenderSpaPlugin = require('prerender-spa-plugin')
var routes = require('./src/router');

var PROD = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    vendor: ['vue'],
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name]/[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': (() => PROD 
              ? ExtractTextPlugin.extract({
                  loader: [
                    {
                      loader: 'css-loader',
                      options: {
                        sourceMap: true
                      }
                    },
                    {
                      loader: 'sass-loader',
                      options: {
                        outputStyle: 'expanded',
                        sourceMap: true,
                        sourceMapContents: true
                      }
                    }
                  ],
                  fallback: 'vue-style-loader'
                })
              : [
                  'vue-style-loader',
                  'css-loader?sourceMap',
                  'sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
                ]
            )()
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      //inject: false,
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'template', 'index.html')
    })
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      'root': path.resolve(__dirname, 'src'),
    }
  },
  devServer: {
    historyApiFallback: true
  },
  performance: {
    hints: false
  },
  devtool: '#source-map' //#eval-source-map
}

if (PROD) {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html

  module.exports.plugins = (module.exports.plugins || []).concat([
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
     sourceMap: true,
     compress: {
       warnings: false
     }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
    , new PrerenderSpaPlugin(
      // Absolute path to compiled SPA
      path.join(__dirname, 'dist'),
      // List of routes to prerender
      routes.map(x => x.path),
      {
        captureAfterTime: 1000,
        captureAfterDocumentEvent: 'vue-post-render'
      }
    )
  ])
}

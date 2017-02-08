var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')

var PROD = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    main: './src/main.js',
    vendor: ['vue']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: PROD ? 'assets/' : '/',
    filename: '[name].js'
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
                  fallbackLoader: 'vue-style-loader'
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
      name: 'vendor' 
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
      'vue$': 'vue/dist/vue.common.js',
      'assets': path.resolve(__dirname, 'src', 'assets'),
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
  ])
}

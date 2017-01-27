var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var path = require('path');

module.exports = {
  entry: {
    app: './src/js/app.js',
    vendor: ['vue']
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            loaders: {
              scss: ExtractTextPlugin.extract({
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
              //,
              //'scss': [
              //  'vue-style-loader', 
              //  'css-loader', 
              //  'sass-loader'
              //]
            }
          }
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' 
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      exclude: 'vendor'
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    
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
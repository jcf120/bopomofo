var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var env = process.env.NODE_ENV || 'development';
var isProduction = 'production' === env
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var projectName = "PROJECT_NAME"

var plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(env)
    },
    "PROJECT_NAME" : projectName
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: function () {
        return [autoprefixer]
      }
    }
  }),
  new ExtractTextPlugin({
    filename: 'style.css',
    allChunks: true,
  }),
];


if (isProduction) {
  plugins.push(
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      }
    })
  )
}

module.exports = {
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  entry: {
    app: path.resolve(__dirname, "src/index.jsx")
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: projectName + '.min.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [autoprefixer]
                }
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /.(png|jpg|gif|svg|jpeg)$/,
        loaders: ['url']
      }
    ]
  },
  plugins: plugins,
}

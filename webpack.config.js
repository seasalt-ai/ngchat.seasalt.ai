'use strict'
const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.png', '.jpg', '.gif'],
    alias: {
      '@': path.resolve('src')
    },
    modules: ['node_modules', path.resolve('src')]
  },
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify('/')
    }),
    new CopyPlugin({
      patterns: [{ from: 'static' }]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ],
  devServer: {
    index: 'index.html',
    hot: true,
    watchContentBase: true,
    contentBase: [
      path.join(__dirname, 'static'),
      path.join(__dirname, 'src/templates')
    ]
  },
  devtool: '#eval-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: 'expanded'
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    // css 最小化開關，目前設定為關閉。如有需要將輸出的 css 最小化再將 minimize 設定為 true
    minimize: false,
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
}

if (process.env.NODE_ENV === 'development') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin()
  ])
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new CleanWebpackPlugin()
  ])
}

module.exports.plugins = (module.exports.plugins || []).concat([
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  })
])

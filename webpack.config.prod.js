var webpackConfig = require('./webpack.config.base.js')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var webpack = require('webpack')

var config = Object.assign(webpackConfig, {})

config.plugins = [
    new CleanWebpackPlugin(['build']),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
]

module.exports = config
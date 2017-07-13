var CleanWebpackPlugin = require('clean-webpack-plugin')
var webpackConfig = require('./webpack.config.base.js')
var webpack = require('webpack')

var config = Object.assign(webpackConfig, {
    devtool: 'inline-source-map',
    watchOptions: {
        poll: true
    }
})

config.plugins = [
    new CleanWebpackPlugin(['build']),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    })
]

module.exports = config
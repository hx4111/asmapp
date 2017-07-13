var path = require('path')

var config = {
    entry: path.resolve(__dirname, './app/index.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: 'babel-loader'
            }, 
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
}

module.exports = config

var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

module.exports = {

    devtool: 'inline-source-map',

    entry: {
        bundle: __dirname + '/assets/pages/main.js',
        base: [__dirname + '/assets/vendors/zdp_base.js', __dirname + '/assets/vendors/server.dev.js']
    },

    output: {
        path: __dirname + '/public/js',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/js/'
    },

    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: 'style!css' }
        ]
    },

    // Expose __dirname to allow automatically setting basename.
    context: __dirname,
    node: {
        __dirname: true
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ],

    devServer: {
        proxy: {
            '*': {
                target: 'http://localhost:2999'
            }
        }
    }

};

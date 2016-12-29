var path = require('path'),
    src_dir = path.resolve(__dirname,'assets'),
    nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");
var fs = require('fs');
var config = {
    entry: __dirname + '/assets/pages/entry.js',
    output: {
        path: __dirname + '/__build__',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/Public/__build__/'
    },
    module:{
        loaders:[
            {
                test:/\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css!less')
            },
            {
                test:/\.css$/,
                loader: ExtractTextPlugin.extract('css')
            },
            {
                test:/\.(jpg|jpeg|png|gif|)$/i,
                loaders:['url?limit=18000']
            },
            {
                test:/\.(woff|woff2|svg|eot|ttf)$/,
                loaders:['url?limit=15000']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel",
                query:
                {
                    presets:['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('shared.js'),
        new ExtractTextPlugin('/css/base.css', {allChunks: true})
    ],
    devServer: {
        proxy: {
            '*': {
                target: 'http://localhost:2999'
            }
        }
    }
};

module.exports = config;

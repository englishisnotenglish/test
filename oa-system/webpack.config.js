var path = require('path'),
    src_dir = path.resolve(__dirname,'assets'),
    nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var config = {
    entry: __dirname + '/assets/pages/main.js',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/Public/js/'
    },
    module:{
        loaders:[
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
        new CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
            minChunks: 1
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

module.exports = config;

const webpack = require('webpack')
const validator = require('webpack-validator')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = validator({
    entry: __dirname + '/src/main.js',

    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 2020
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        }),
        new ExtractTextPlugin('style.css')
    ]
})

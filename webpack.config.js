const webpack = require('webpack')
const path = require('path')
const validator = require('webpack-validator')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/* Html Webpack Config */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
})

/* Directory */
const directory = path.resolve(__dirname, 'src/')

module.exports = validator({
    entry: __dirname + '/src/components/main.js',

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            generalComponent: path.resolve(__dirname, 'src', 'components'),
            storeComponent: path.resolve(__dirname, 'src', 'store'),
            styleComponent: path.resolve(__dirname, 'src', 'style')
        }
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
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
        new ExtractTextPlugin('style.css'),
        HtmlWebpackPluginConfig
    ]
})

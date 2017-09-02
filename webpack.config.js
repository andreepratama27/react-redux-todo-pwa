const webpack = require('webpack')
const path = require('path')
const validator = require('webpack-validator')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = validator({

    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        path.resolve(__dirname, 'index.js')
    ],

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            Actions: path.resolve(__dirname, 'actions/'),
            Component: path.resolve(__dirname, 'components/'),
            Container: path.resolve(__dirname, 'containers/'),
            Lib: path.resolve(__dirname, 'lib/'),
            Reducer: path.resolve(__dirname, 'reducers/'),
            Style: path.resolve(__dirname, 'style')
        }
    },

    devServer: {
        inline: true,
        port: 3000
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: extractTextPlugin.extract('css!sass')
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        }),
        new extractTextPlugin('style.css')
    ]
})

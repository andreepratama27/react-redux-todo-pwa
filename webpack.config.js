const webpack = require('webpack')
const path = require('path')
const validator = require('webpack-validator')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/* Directory */
const directory = path.resolve(__dirname, 'src/')

module.exports = validator({

    entry: [
        'babel-polyfill',
        path.resolve(__dirname, 'index.js')
    ],

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            Actions: path.resolve(__dirname, 'actions/'),
            Component: path.resolve(__dirname, 'components/'),
            Container: path.resolve(__dirname, 'containers/'),
            Reducer: path.resolve(__dirname, 'reducers/'),
            Style: path.resolve(__dirname, 'style')
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

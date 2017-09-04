const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

    entry: path.resolve(__dirname, 'index.js'),

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            Actions: path.resolve(__dirname, 'actions/'),
            Component: path.resolve(__dirname, 'components/'),
            Container: path.resolve(__dirname, 'containers/'),
            Config: path.resolve(__dirname, 'config/'),
            Lib: path.resolve(__dirname, 'lib/'),
            Reducer: path.resolve(__dirname, 'reducers/'),
            Style: path.resolve(__dirname, 'style')
        }
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
}

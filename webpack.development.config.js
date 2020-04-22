const path 				= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:    'development',
    devtool: 'eval',
    entry:   [
        path.join(__dirname, 'app/index.js'),
    ],
    output: {
        path:       path.join(__dirname, '/dist/'),
        filename:   '[name].js',
        publicPath: '',
    },
    resolve: {
        modules:    ['app', 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.tpl.html',
            inject:   'body',
            filename: 'index.html',
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test:   /[\\/]node_modules[\\/]/,
                    name:   'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test:    /\.(js|jsx)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader:  'eslint-loader',
                options: {
                    configFile:    '.eslintrc',
                    failOnWarning: false,
                    failOnError:   false,
                },
            },
            {
                test:    /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader:  'babel-loader',
                query:   {
                    presets: ['@babel/preset-react'],
                },
            },
        ],
    },
};

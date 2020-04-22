const path 				= require('path');
const webpack 			= require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    mode:    'development',
    entry:   [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'app/index.js'),
    ],
    output: {
        path:       path.join(__dirname, '/dist/'),
        filename:   'app.js',
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
        new webpack.HotModuleReplacementPlugin(),
    ],
    performance: {
        hints: false,
    },
    module: {
        rules: [{
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
        }],
    },
};

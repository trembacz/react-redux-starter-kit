
const path 					   = require('path');
const HtmlWebpackPlugin 	   = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode:  'production',
    entry: [
        path.join(__dirname, 'app/index.js'),
    ],
    output: {
        path:       path.join(__dirname, '/dist/'),
        filename:   '[name].min.js',
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
        // new BundleAnalyzerPlugin()
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

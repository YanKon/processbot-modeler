const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './app/index.js',
    },
    devtool: 'inline-source-map', // nur für die Entwicklung https://webpack.js.org/guides/development/ erleichtert das auffinden von bugs
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Processbot Modeler',
            myPageHeader: 'Processbot Modeler',
            template: './app/index.html',
            favicon: './app/images/favicon.png',
            filename: './index.html' //relative to root of the application
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.bpmn$/,
                use: 'raw-loader'
            },
            {
                test: /\.bpmnlintrc$/,
                use: [
                  {
                    loader: 'bpmnlint-loader',
                  }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [{
                  loader: 'style-loader' // creates style nodes from JS strings
                }, {
                  loader: 'css-loader' // translates CSS into CommonJS
                }, {
                  loader: 'less-loader' // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
        ]
    },
};
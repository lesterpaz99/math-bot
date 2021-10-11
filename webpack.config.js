const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    entry: {
        main: "/src/index.js",
        cost_living: '/src/cost_living.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },
    resolve: {
        extensions: [".js", ".mjs"],
        alias: {
            '@styles': path.resolve(__dirname, 'src/assets/styles/'),
            '@modules': path.resolve(__dirname, 'src/modules/')
        }
    },
    module: {
        rules: [{
                test: /\.m?js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            chunks: 'main',
        }),
        new HtmlWebpackPlugin({
            template: './public/cost_living.html',
            filename: './pages/cost_living.html',
            chunks: 'cost_living'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src', 'assets', 'images'),
                to: 'assets/images'
            }]
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    }
}
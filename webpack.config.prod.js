const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.jsx',
    output: {
        filename: 'client.js',
        path: path.join(__dirname, "client/dist"),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            // jsx
            {
                test: /\.jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            // CSS
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    },
    devtool: "eval-source-map",
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            path: path.resolve(__dirname, './client/index.html'),
            template: path.resolve(__dirname, './client/index.html'),
            hash: false,
            inject: true,
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        })
    ]
}


module.exports = {
    entry: './start.js',
    output: {
        filename: 'server.js',
        path: __dirname + '/dist/server',
    },
    target: 'node',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};

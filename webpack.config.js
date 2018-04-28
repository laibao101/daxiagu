
module.exports = {
    entry: './server/index.js',
    output: {
        filename: 'server.js',
        path: __dirname + '/dist/server',
    },
    target: 'node',
    mode: 'development',
    context: __dirname,
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true,
        path: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["env", "stage-0"],
                    }
                }
            }
        ]
    }
};

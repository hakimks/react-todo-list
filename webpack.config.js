const path = require('path');

module.exports = {
    mode: "development",
    entry: ['./client/client.js'],
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js',
        publicPath: '/'
    }, 
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}

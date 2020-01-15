// webpack.config.js - minimum setup to work
module.exports = {
    mode: 'development',
    watch: true,
    entry: './index.js',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output: {
        filename: 'bundle.js'
    },
};

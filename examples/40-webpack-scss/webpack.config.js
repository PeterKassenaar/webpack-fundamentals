// webpack.config.js - minimum setup to work
module.exports = {
    mode: 'development',
    watch: true,
    entry: './index.js',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(s)css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    output: {
        filename: 'bundle.js'
    },
};

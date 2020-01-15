// webpack.config.js - minimum setup to work

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],
    output: {
        filename: 'bundle.js'
    },
};

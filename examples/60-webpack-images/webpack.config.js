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
            },
            // configure url-loader to load (and convert) images
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
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

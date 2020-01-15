// webpack.config.js - minimum setup to work
module.exports = {
	mode: 'development',
	watch: true,
	entry: './index.js',
	devtool: 'inline-source-map',
	output: {
		filename: 'bundle.js'
	},
};

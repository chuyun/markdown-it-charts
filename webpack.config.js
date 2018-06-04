var path = require('path')
var nodeExternals = require('webpack-node-externals');

const nodeConfig = {
	target: 'node',
	entry: {
		index: './index.js'
	},
	externals: [nodeExternals()],
	output: {
		path: path.join(__dirname, 'bin'),
		filename: 'markdown-it-charts.js',
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						'env'
					]
				}
			}
		}]
	},
	// devtool: 'source-map'
}

const webConfig = {
	target: 'web',
	entry: {
		index: './index.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'markdown-it-charts.js',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						'env'
					]
				}
			}
		}]
	},
	// devtool: 'source-map'
}

module.exports = [nodeConfig, webConfig];

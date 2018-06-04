var  path =require('path')
var  nodeExternals =require('webpack-node-externals');'webpack-node-externals' 

const nodeConfig = {
	target: 'node',
	entry: {
		index: './src/index.js'
	},
	externals: [nodeExternals()],
	output: {
		path: path.join(__dirname, 'bin'),
		filename: '[name].js',
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
		index: './src/index.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
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

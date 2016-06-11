const webpack = require('webpack')
const path = require('path')

const config = {
	entry: {
		path: path.resolve(__dirname, 'src') + '/index.jsx'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel',
				query: {
					presets: [
						'es2015',
						'react',
					]
				}
			},
			{
				test: /\.css$/,
				include: path.resolve(__dirname, 'src'),
				loaders: ['style', 'css'],
			},
			{
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				include: path.resolve(__dirname, 'src'),
				loader: "url?limit=10000&mimetype=application/font-woff"
			},
			{
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				include: path.resolve(__dirname, 'src'),
				loader: "url?limit=10000&mimetype=application/font-woff"
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				include: path.resolve(__dirname, 'src'),
				loader: "url?limit=10000&mimetype=application/octet-stream"
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				include: path.resolve(__dirname, 'src'),
				loader: "file"
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				include: path.resolve(__dirname, 'src'),
				loader: "url?limit=10000&mimetype=image/svg+xml"
			}
		]
	},
	devtool: 'eval-source-map'
};

if (process.env.npm_lifecycle_event === 'build') {
	config.plugins = [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true
			}
		}),

		new webpack.optimize.DedupePlugin(),

		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	];

	config.devtool = 'source-map'
}

module.exports = config
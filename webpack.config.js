var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/js/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			applicationStyles: 'app/styles/app.scss'

		},
		extensions: ['','.js','.jsx']
	},
	module: {
		loaders:[
			{
				loader: ['babel-loader'],
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
			    query: {
			        presets: [ 'react', 'es2015', 'stage-0', 'react-hmre' ]
			    }
			}
		]
	},
	devtool: 'eval-source-map'
}; 
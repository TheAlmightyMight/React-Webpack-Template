import * as path from 'node:path'

// import { merge } from 'webpack-merge'

import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import * as webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

// import config from './webpack.config.base'

const devServer: DevServerConfiguration = {
	port: 8080,
	historyApiFallback: false,
	client: {
		logging: 'info',
		overlay: true,
		progress: true,
		reconnect: 5,
	},
	proxy: {},
	hot: true,
	watchFiles: process.cwd(),
	open: true,
	liveReload: true,
}

export default {
	mode: 'development',
	target: 'web',
	entry: './src/index.tsx',
	devtool: 'source-map',
	cache: true,
	// parallelism: cores,
	performance: false,
	devServer,
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { sourceMap: true },
					},
				],
			},
			{
				test: /\.(tsx|ts)/,
				exclude: /node_modules/,
				use: [{ loader: 'esbuild-loader' }],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve('../public/index.html'),
			// title: 'Mighty CRA alternative',
			// filename: 'index.html',
			// favicon: './images/React-icon.svg.png',
			cache: true,
		}),
		new webpack.ProgressPlugin(),
	],
	output: {
		filename: '[name].[hash].js',
		assetModuleFilename: '[name][ext]',
		path: path.resolve('../', 'dist'),
		clean: true,
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', 'jsx', 'html'],
	},
}

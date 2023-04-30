import * as webpack from 'webpack'
import * as path from 'node:path'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const devServer: DevServerConfiguration = {
	port: 8080,
	historyApiFallback: false,
	client: {
		logging: 'verbose',
		overlay: true,
		progress: true,
		reconnect: 5,
	},
	proxy: {},
	open: true,
	https: true,
	http2: true,
	compress: true,
}

export default {
	mode: 'development',
	target: 'web',
	entry: './src/index.tsx',
	devtool: 'source-map',
	performance: false,
	devServer,
	stats: 'normal',
	cache: {
		type: 'filesystem',
		name: 'DevCache',
		maxAge: 604800000,
		compression: 'brotli',
	},
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
			template: './src/public/index.html',
			title: 'Webpack template',
			filename: 'index.html',
			favicon: './src/images/React-icon.svg.png',
			cache: true,
		}),
		new webpack.DefinePlugin({ MODE: JSON.stringify('development') }),
	],
	resolve: {
		extensions: ['.ts', '.tsx', '...'],
	},
	watchOptions: {
		ignored: '**/node_modules',
	},
} as webpack.Configuration

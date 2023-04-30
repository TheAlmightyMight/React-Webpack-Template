import * as webpack from 'webpack'
import * as path from 'node:path'
import MiniCSSExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CSSminimizer from 'css-minimizer-webpack-plugin'
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'

export default {
	mode: 'production',
	target: 'web',
	entry: './src/index.tsx',
	stats: 'verbose',
	devtool: false,
	cache: {
		type: 'filesystem',
		name: 'ProdCache',
		maxAge: 1000 * 60 * 60 * 24 * 2,
		compression: 'gzip',
	},
	performance: {
		hints: 'warning',
	},
	optimization: {
		minimizer: [new CSSminimizer()],

		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendor',
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
				},
				runtimeChunk: { name: 'runtime' },
			},
		},
	},
	module: {
		rules: [
			// https://webpack.js.org/guides/asset-modules/
			{ test: /\.svg/, type: 'asset/inline' },
			{
				test: /\.css$/,
				use: [
					MiniCSSExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true },
					},
					'postcss-loader',
				],
			},
			{
				test: /\.(tsx|ts)/,
				exclude: /node_modules/,
				use: [{ loader: 'ts-loader' }],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/public/index.html',
			title: 'Webpack template',
			filename: 'index.html',
			favicon: './src/images/React-icon.png',
			cache: true,
		}),
		new webpack.DefinePlugin({ MODE: JSON.stringify('production') }),
		new BundleAnalyzerPlugin.BundleAnalyzerPlugin({ openAnalyzer: false }),
		new WebpackManifestPlugin({ fileName: 'runtime' }),
		new webpack.ProgressPlugin(),
		new MiniCSSExtractPlugin({ filename: '[name].[contenthash].css' }),
	],
	output: {
		filename: '[name].[contenthash].js',
		asyncChunks: true,
		path: path.resolve(__dirname, 'dist'),
		clean: false,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '...'],
	},
} as webpack.Configuration

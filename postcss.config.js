const postcssPresetEnv = require('postcss-preset-env')
const autoPrefixer = require('autoprefixer')
const atImport = require('postcss-import')
const nested = require('postcss-nested')
// const purgecss = require('@fullhuman/postcss-purgecss')
// const glob = require('glob')

module.exports = {
	plugins: [postcssPresetEnv(), autoPrefixer(), atImport(), nested()],
}

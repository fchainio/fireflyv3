const path = require('path')

module.exports = {
  arch: process.env.BUILD_ARCH || 'all',
  asar: true,
  buildPath: path.join(__dirname, '../dist'),
  dir: path.join(__dirname, '../build/desktop'),
  icon: path.join(__dirname, '../icons/icon'),
  ignore: /(^\/(src|test|\.[a-z]+|README|yarn|static|dist\/web))|\.gitkeep/,
  out: path.join(__dirname, '../dist/desktop'),
  overwrite: true,
  osxSign: true,
  platform: process.env.BUILD_TARGET || 'all'
}

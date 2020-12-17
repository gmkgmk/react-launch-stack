/* config-overrides.js */
const { override, overrideDevServer } = require('customize-cra')
const {
  webpackLaunchStack,
  devServerLaunchStack,
} = require('./../launch-stack')

module.exports = {
  webpack: override(webpackLaunchStack()),
  devServer: overrideDevServer(devServerLaunchStack()),
}

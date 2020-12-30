const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { getBabelLoader, addWebpackPlugin } = require('customize-cra')
const launchStackEditorMiddleware = require('./launchStackEditorMiddleware')
const InjectHandlePlugin = require('./InjectHandlePlugin')
// webpack options
const webpackLaunchStack = () => (config) => {
  if (config.mode !== 'development') return config
  const HtmlWebpackPlugin = config.plugins.find(
    (element) => element.constructor.name === 'HtmlWebpackPlugin'
  )
  // 添加插件
  config.plugins = [
    ...config.plugins,
    new InjectHandlePlugin(HtmlWebpackPlugin.constructor),
  ]
  const babelLoader = getBabelLoader(config)
  babelLoader.options.plugins.push([
    path.resolve(__dirname, 'LaunchStackEditorPlugin.js'),
  ])

  return config
}

// webpack-dev-server options
const devServerLaunchStack = () => (config) => {
  if (config.mode !== 'development') return config
  const before = config.before
  delete config.before
  config.before = (app, server) => {
    app.use(launchStackEditorMiddleware())
    before(app, server)
  }
  return {
    ...config,
  }
}
module.exports = {
  webpackLaunchStack,
  devServerLaunchStack,
}

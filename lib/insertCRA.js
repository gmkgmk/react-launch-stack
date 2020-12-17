const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { getBabelLoader, addWebpackPlugin } = require('customize-cra')
const launchStackEditorMiddleware = require('./launchStackEditorMiddleware')
const InjectHandlePlugin = require('./InjectHandlePlugin')
// webpack options
const webpackLaunchStack = () => (config) => {
  if (config.mode === 'development') {
    config.plugins = [
      ...config.plugins,
      new InjectHandlePlugin(config.plugins[0].constructor),
    ]
  }
  const babelLoader = getBabelLoader(config)
  babelLoader.options.plugins.push([
    path.resolve(__dirname, 'LaunchStackEditorPlugin.js'),
  ])

  return config
}

// webpack-dev-server options
const devServerLaunchStack = () => (config) => {
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

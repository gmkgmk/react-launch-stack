const path = require('path')
const { getBabelLoader } = require('customize-cra')
const launchStackEditorMiddleware = require('./launchStackEditorMiddleware')

const webpackLaunchStack = () => (config) => {
  const babelLoader = getBabelLoader(config)
  babelLoader.options.plugins.push([
    path.resolve(__dirname, 'launchStackEditorPlugin.js'),
  ])
  return config
}

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

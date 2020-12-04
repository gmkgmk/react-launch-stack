const { webpackLaunchStack, devServerLaunchStack } = require('./lib/insertCRA')
const launchStackEditorMiddleware = require('./lib/launchStackEditorMiddleware')
const launchStackEditorPlugin = require('./lib/launchStackEditorPlugin')

module.exports = {
  webpackLaunchStack,
  devServerLaunchStack,
  launchStackEditorMiddleware,
  launchStackEditorPlugin,
}

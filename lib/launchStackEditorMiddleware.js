const launchEditor = require('react-dev-utils/launchEditor')
const launchEditorEndpoint = '/__open-stack-frame-in-editor-handle'
module.exports = function createLaunchEditorMiddleware() {
  return function launchEditorMiddleware(req, res, next) {
    if (req.url.startsWith(launchEditorEndpoint)) {
      const lineNumber = parseInt(req.query.lineNumber, 10) || 1
      const colNumber = parseInt(req.query.colNumber, 10) || 1
      launchEditor(req.query.fileName, lineNumber, colNumber)
      res.end()
    } else {
      next()
    }
  }
}

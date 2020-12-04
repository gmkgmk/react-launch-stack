function CustomClickPlugin({ types: t, ...rest }) {
  return {
    visitor: {
      JSXOpeningElement(path) {
        const rootState = path.getStatementParent()
        const pathFileName = rootState.hub.file.opts.filename
        const { node } = path
        const { line, column } = node.loc.start
        // line
        const stackLine = t.jsxAttribute(
          t.jSXIdentifier('launch-stack-line'),
          t.stringLiteral(`${line}`)
        )
        // column
        const stackColumn = t.jsxAttribute(
          t.jSXIdentifier('launch-stack-column'),
          t.stringLiteral(`${column}`)
        )
        // column
        const stackPath = t.jsxAttribute(
          t.jSXIdentifier('launch-stack-path'),
          t.stringLiteral(pathFileName)
        )
        node.attributes.push(stackLine, stackColumn, stackPath)
      },
    },
  }
}

module.exports = CustomClickPlugin

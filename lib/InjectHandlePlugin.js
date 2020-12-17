const InjectHandle = require('./InjectHandle')
const InjectHandlePluginName = 'InjectHandlePlugin'
class InjectHandlePlugin {
  constructor(htmlWebpackPlugin, tests) {
    this.htmlWebpackPlugin = htmlWebpackPlugin
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('InlineChunkHtmlPlugin', (compilation) => {
      const hooks = this.htmlWebpackPlugin.getHooks(compilation)
      hooks.alterAssetTagGroups.tap('InlineChunkHtmlPlugin', (assets) => {
        assets.bodyTags.push({
          tagName: 'script',
          innerHTML: InjectHandle,
          closeTag: true,
        })
      })
    })
  }
}
module.exports = InjectHandlePlugin

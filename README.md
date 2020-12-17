# react-launch-stact

点击页面自动在编辑带打开对应文件

#

用法一:基于create-react-app
 * "customize-cra": "^1.0.0",
 * "create-react-app": "^3.4.1"

_config-overrides.js_

```javascript
const {
  webpackLaunchStack,
  devServerLaunchStack,
} = require('./../launch-stack')

module.exports = {
  webpack: override(
    webpackLaunchStack()
    //...other options
  ),
  devServer: overrideDevServer(
    devServerLaunchStack()
    //...other options
  ),
}
```

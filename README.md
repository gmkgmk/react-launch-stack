# react-launch-stack

点击页面自动在编辑带打开对应文件

<!-- ![image](http://github.com/gmkgmk/react-launch-stack/raw/master/readme.gif) -->

#

## 用法一:基于 create-react-app

- "customize-cra": "^1.0.0",
- "create-react-app": "^3.4.1"

_config-overrides.js_

## 使用

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

*command + 鼠标点击*

---

## 运行机制

![image](http://github.com/gmkgmk/react-launch-stack/raw/master/read-flow.png)

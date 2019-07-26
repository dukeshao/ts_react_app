## 一、环境搭建

使用 create-react-app 创建 TS 项目:

```js
create-react-app tsapp --typescript
cd tsapp
#安装依赖
npm i
#安装路由
npm i @types/react-router-dom react-router-dom

```

## 二、创建组件

### （一）纯函数组件

```tsx
import React from 'react';
import {Route} from "react-router-dom";

const Detail: React.FC = () => {
  return (
    <div className="detail">
       这是详情页
    </div>
  );
}

export default Detail;
```

### （二）类组件

```tsx
import React, {Component} from "react";

interface P {
  color: string,
  size?: string
}
interface S {
  count: number
}
class List extends Component<P, S> {
  public count = 7
  public hello = (): void => {
    console.log(666)
  }
  render() {
    return (
      <div>
        这是列表页
      <button onClick={this.hello}>点击</button>
        {this.count}
      </div>
    )
  }
}

export default List;
```

## 三、引入 Antd

### （一）初级用法

```tsx
#安装 antd
yarn add antd
#修改 src/App.tsx，引入 antd 的按钮组件。
import React, { Component } from 'react';
import Button from 'antd/es/button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
#App.css 中引入 antd 样式文件
@import '~antd/dist/antd.css';
```

其实这样是把 antd 的样式全部引入，不符合按需引入。

### （二）高级配置（按需加载样式）

```tsx
#安装
yarn add react-app-rewired customize-cra
#改写 package.json 命令
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
#然后在项目根目录创建一个 config-overrides.js 用于修改默认配置。
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
#使用 babel-plugin-import是一个用于按需加载组件代码和样式的 babel 插件，修改 config-overrides.js 配置
+ const { override, fixBabelImports } = require('customize-cra');

- module.exports = function override(config, env) {
-   // do stuff with the webpack config...
-   return config;
- };
+ module.exports = override(
+   fixBabelImports('import', {
+     libraryName: 'antd',
+     libraryDirectory: 'es',
+     style: 'css',
+   }),
+ );
#删除在 App.css 中引入的 antd 样式表，在使用组件的地方，按如下方式引入组件即可加载相应的样式
import { Button } from 'antd';
```


import React from 'react';
import {Route} from "react-router-dom";

import Home from "./components/Home/Home";
import List from "./components/List/List";
import Login from "./components/Login/Login";
import Mine from "./components/Mine/Mine";

import {Button} from 'antd';

const App: React.FC = () => {
  return (
    <div className="App">
      <ul>
        <li>
          <a href="#/">首页</a>
        </li>
        <li>
          <a href="#/login">登录页面</a>
        </li>
        <li>
          <a href="#/list"><Button type="primary">列表页</Button></a>
        </li>
        <li>
          <a href="#/mine">个人中心</a>
        </li>
      </ul>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/list" component={List} />
      <Route path="/mine" component={Mine} />
    </div>
  );
}

export default App;

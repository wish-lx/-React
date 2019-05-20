import React from 'react';
import {Provider} from 'react-redux'
import Header from './common/header'
import store from './store'
function App() {
  return (
    // provider作用为： store中的数据header组件都可以获取使用  相当于传递
    <Provider store = {store}>
      <Header/>
      </Provider>
  );
}

export default App;

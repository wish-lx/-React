import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './common/header'
import Detail from '../src/pages/detail'
import Home from '../src/pages/home'
import Login from '../src/pages/login'
import store from './store'
function App() {
  return (
    // provider作用为： store中的数据header组件都可以获取使用  相当于传递
    <Provider store = {store}>
      <div>
         
         <BrowserRouter>
         <Header/>
           <div>
             <Route path="/detail/:id" exact component={Detail}></Route>
             <Route path="/login" exact component={Login}></Route>

             <Route path="/" exact component={Home}></Route>
           </div>
         </BrowserRouter>
      </div>
      
      </Provider>
  );
}

export default App;

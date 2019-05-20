// 创造store
import {createStore, compose} from 'redux'
import reducer from './reducer.js'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 传入reducer
const store = createStore(reducer, composeEnhancers())

export default store
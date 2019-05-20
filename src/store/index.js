// 创造store
import {createStore} from 'redux'
import reducer from './reducer.js'
// 传入reducer
const store = createStore(reducer)

export default store
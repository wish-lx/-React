// 创造store
import {creatStore} from 'redux'
import reducer from './reducer.js'
// 传入reducer
const store = creatStore(reducer)

export default store
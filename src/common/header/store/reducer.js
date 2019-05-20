import * as actionType from './actionTypes'
import {fromJS} from 'immutable'
// immutable库
// immutable对象----不可更改
const defaultState = fromJS({
    foused: false
     
 })
 export default (state = defaultState, action)=>{
     if(action.type === actionType.INPUT_FOCUS) {
        //  Immutable的set方法，会结合之前immutable的值和设置的值，返回一个全新的对象
         return state.set('foused', true)
     }
     if(action.type === actionType.INPUT_BLUR) {
        return state.set('foused', false)
     }
     return state
 }
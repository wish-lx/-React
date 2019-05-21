import * as actionType from './actionTypes'
import {fromJS} from 'immutable'
// immutable库
// immutable对象----不可更改
const defaultState = fromJS({
    foused: false,
    list: []
     
 })
 export default (state = defaultState, action)=>{
     switch(action.type){
        case  actionType.INPUT_FOCUS:
             //  Immutable的set方法，会结合之前immutable的值和设置的值，返回一个全新的对象
            return state.set('foused', true)
        case  actionType.INPUT_BLUR:
            return state.set('foused', false)
        case  actionType.LIST:
            return state.set('list', action.data)  
        default:
            return state
    }
 }
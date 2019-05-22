import * as actionType from './actionTypes'
import {fromJS} from 'immutable'
// immutable库
// immutable对象----不可更改
const defaultState = fromJS({
    foused: false,
    list: [],
    mouseIn: false,
    page: 1,
    totalPage: 1
     
 })
 export default (state = defaultState, action)=>{
     switch(action.type){
        case  actionType.INPUT_FOCUS:
             //  Immutable的set方法，会结合之前immutable的值和设置的值，返回一个全新的对象
            return state.set('foused', true)
        case  actionType.INPUT_BLUR:
            return state.set('foused', false)
        case  actionType.LIST:
            return state.merge({
                list: action.data,
                totalPag: action.totalPage
            })
        case  actionType.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case  actionType.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case  actionType.CHANGE_PAGE:
            return state.set('page', action.page)                   
        default:
            return state
    }
 }
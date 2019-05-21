// actionCreator是一个函数创造器
import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'
import axios from 'axios'

export const inputFocus = ()=>({
    type: actionTypes.INPUT_FOCUS
})
export const inputBlur = ()=>({
    type: actionTypes.INPUT_BLUR
})
export const getListData = (data)=>({
    type: actionTypes.LIST,
    data: fromJS(data)
})
// redux-thunk 帮助返回一个函数 接受dispatch参数，发送请求

export const getList = ()=>{
    return(dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data
            dispatch(getListData(data.data))
            // console.log(data)
        }).catch((err)=>{
           console.log(err)
        })
    }
    
}
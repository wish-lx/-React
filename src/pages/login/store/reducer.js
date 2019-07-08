// import * as constans from './constans'

import {fromJS} from 'immutable'
// immutable库
// immutable对象----不可更改

 const defaultState = fromJS({
     login: false
   })
 export default (state = defaultState, action)=>{
     switch(action.type){
       
       default:
            return state
    }
 }
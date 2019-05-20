import * as actionType from './actionTypes'

const defaultState = {
    foused: false
     
 }
 export default (state = defaultState, action)=>{
     if(action.type === actionType.INPUT_FOCUS) {
         return {
             foused: true 
         }
     }
     if(action.type === actionType.INPUT_BLUR) {
         return {
             foused: false 
         }
     }
     return state
 }
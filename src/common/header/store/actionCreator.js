// actionCreator是一个函数创造器
import * as actionTypes from './actionTypes'

export const inputFocus = ()=>({
    type: actionTypes.INPUT_FOCUS
})
export const inputBlur = ()=>({
    type: actionTypes.INPUT_BLUR
})
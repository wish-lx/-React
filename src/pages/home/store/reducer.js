import * as constans from './constans'

import {fromJS} from 'immutable'
// immutable库
// immutable对象----不可更改
const defaultState = fromJS({
    topicList:[],
   articleList:[],
   recommendList:[]
     
 })
 export default (state = defaultState, action)=>{
     switch(action.type){
        case constans.CHANG_HOME_DATA:  
           return state.merge({
            articleList: fromJS(action.articleList),
            recommendList: fromJS(action.recommendList),
            topicList: fromJS(action.topicList)
           })            
        default:
            return state
    }
 }
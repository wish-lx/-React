import * as constans from './constans'

import {fromJS} from 'immutable'
// immutable库
// immutable对象----不可更改
const defaultState = fromJS({
    topicList:[],
   articleList:[],
   recommendList:[],
   showScroll: false
     
 })
 const changeHomeData = (state,action)=> {
   return state.merge({
      articleList: fromJS(action.articleList),
      recommendList: fromJS(action.recommendList),
      topicList: fromJS(action.topicList)
     }) 
 }
 
 export default (state = defaultState, action)=>{
     switch(action.type){
        case constans.CHANG_HOME_DATA:  
           return changeHomeData(state,action)
       case constans.ADD_HOME_DATA:  
           return state.set('articleList', state.get('articleList').concat(action.list))
       case constans.TOGGLE_SCROLL_TOP:  
           return state.set('showScroll', action.show)
       default:
            return state
    }
 }
import * as constans from './constans'

import {fromJS} from 'immutable'
// immutable库
// immutable对象----不可更改

 const defaultState = fromJS({
   title: 'hdjhfjdhgjhgj'
  //  content: '<img alt="ee" src="https://upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/><p>说到财富，财富是有圈层的，如果把财富缩减到实体资产，把人脉、健康、能力全部去掉，只剩下实体金融资产，如保险、保单、珠宝、现金等，我们一般的财富圈层分为四个层次。百万级资产是A7阶层，千万级资产是A8阶层，亿万级资产是A9阶层，10亿级阶层是A10阶层</p>   <p>说到财富，财富是有圈层的，如果把财富缩减到实体资产，把人脉、健康、能力全部去掉，只剩下实体金融资产，如保险、保单、珠宝、现金等，我们一般的财富圈层分为四个层次。百万级资产是A7阶层，千万级资产是A8阶层，亿万级资产是A9阶层，10亿级阶层是A10阶层</p>'
 })
 export default (state = defaultState, action)=>{
     switch(action.type){
       case constans.CHANGE_DETAIL:
       return state.merge({
         title: action.title,
         content: action.content
       })
       default:
            return state
    }
 }

import {fromJS} from 'immutable'
// immutable库
// immutable对象----不可更改
const defaultState = fromJS({
   topicList:[
       {
           id: 1,
           imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
           title: '社会热点'
       },
       {
        id: 1,
        imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        title: '社会热点'
    }
   ]
     
 })
 export default (state = defaultState, action)=>{
     switch(action.type){
                      
        default:
            return state
    }
 }

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
        id: 2,
        imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        title: '社会热点'
    }
   ],
   articleList:[
       {
        id: 1,
        imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        title: '2018年最伤人流行词：“舔狗”，舔到最后一无所有',
        desc: '早上听同事说了一句“舔狗”，突然想到还有这么一个热点还没追，还好，为时不晚！从最初这个词登上微博热搜，到现在都有了百度百科都认证。词性贬义，还扎心地配图“舔狗舔到最后一无所有”。'
       },
       {
        id: 2,
        imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        title: '2018年最伤人流行词：“舔狗”，舔到最后一无所有',
        desc: '早上听同事说了一句“舔狗”，突然想到还有这么一个热点还没追，还好，为时不晚！从最初这个词登上微博热搜，到现在都有了百度百科都认证。词性贬义，还扎心地配图“舔狗舔到最后一无所有”。'
       },
       {
        id: 3,
        imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        title: '2018年最伤人流行词：“舔狗”，舔到最后一无所有',
        desc: '早上听同事说了一句“舔狗”，突然想到还有这么一个热点还没追，还好，为时不晚！从最初这个词登上微博热搜，到现在都有了百度百科都认证。词性贬义，还扎心地配图“舔狗舔到最后一无所有”。'
       },
       {
        id: 4,
        imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        title: '2018年最伤人流行词：“舔狗”，舔到最后一无所有',
        desc: '早上听同事说了一句“舔狗”，突然想到还有这么一个热点还没追，还好，为时不晚！从最初这个词登上微博热搜，到现在都有了百度百科都认证。词性贬义，还扎心地配图“舔狗舔到最后一无所有”。'
       },
       {
        id: 5,
        imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        title: '2018年最伤人流行词：“舔狗”，舔到最后一无所有',
        desc: '早上听同事说了一句“舔狗”，突然想到还有这么一个热点还没追，还好，为时不晚！从最初这个词登上微博热搜，到现在都有了百度百科都认证。词性贬义，还扎心地配图“舔狗舔到最后一无所有”。'
       }
   ],
   recommendList:[
       {
           id: '1',
           imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
       },
       {
        id: '2',
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
       }
   ]
     
 })
 export default (state = defaultState, action)=>{
     switch(action.type){
                      
        default:
            return state
    }
 }
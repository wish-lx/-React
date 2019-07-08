import axios from 'axios'
import * as constans from './constans'
import { fromJS } from 'immutable';
const changeHomeData = (result) => ({
    type: constans.CHANG_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList,
    topicList: result.topicList
})
const addHomeData = (list) => ({
    type: constans.ADD_HOME_DATA,
    list: fromJS(list)
})
export const toggleTopShow = (show) => ({
    type: constans.TOGGLE_SCROLL_TOP,
    show
})
// 异步操作
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data
            dispatch(changeHomeData(result))
        })
    }
}
export const getMoreList = () => {
    console.log('click')
    return (dispatch) => {
        axios.get('/api/homeList.json').then((res)=>{
            const result = res.data
            // console.log(result)
            dispatch(addHomeData(result))
        })
    }
}
import axios from 'axios'
import * as constans from './constans'
const changeHomeData = (result) => ({
    type: constans.CHANG_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList,
    topicList: result.topicList
})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data
            dispatch(changeHomeData(result))
        })
    }
}
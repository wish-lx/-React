import Axios from "axios";
import * as constans from './constans'

const changeDetail = (title, content) => ({
    type: constans.CHANGE_DETAIL,
    title,
    content 
    
})
export const getDetail = (id) => {
   return (dispatch)=>{
       Axios.get('/api/detail.json?id='+ id).then((res) => {
           console.log(res.data.data)
           dispatch(changeDetail(res.data.data.title,res.data.data.content))
       })       
   }
}
import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`
export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`
export const HomeRight= styled.div`
    width: 240px;
    float: right;
    padding-top: 30px;
`
export const TopicWrapper= styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`
export const TopicItem= styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    background: #f7f7f7;
    font-size: 14px;
    padding-right: 10px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        
        display:block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }

`
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    img{
        border-radius: 10px;
        padding: 20px 0;
        display: block;
        width: 125px;
        height: 100px;
        float: right;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`
export const RecommendWrapper = styled.div`
   margin: 30px 0;
   width: 280px;
`
export const RecommendItem = styled.div`
   height: 50px;
   width: 280px;
   background: url(${(props)=>props.imgUrl});
   background-size: contain;
`
export const LoadMore = styled.div`
   height: 40px;
   line-height: 40px;
   width: 100%;
   margin: 40px 0;
   background: #a5a5a5;
   text-align: center;
   border-radius: 20px;
   color: #fff;
   cursor: pointer;
`
export const WritterWrapper = styled.div`
   width: 260px;
   border: 1px solid #dcdcdc;
   border-radius: 3px;
   height: 300px;
   line-height: 300px;
   text-align: center;
`
export const BackTop = styled.div`
   position: fixed;
   right: 100px;
   bottom: 100px;
   width: 60px;
   height: 60px;
   line-height: 60px;
   text-align: center;
   border: 1px solid #ccc;
   font-size: 14px;
`
 
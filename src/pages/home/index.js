import React from 'react'
import List from './components/List'
import {connect} from 'react-redux'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import * as actionCreations from './store/actionCreator'
import {HomeWrapper,HomeLeft, HomeRight, BackTop} from './style'
class Home extends React.Component{
    handleScrollTop(){
        window.scrollTo(0,0)
    }
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img'
                    alt='wuyiyi'
                     src='https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writter/>
                </HomeRight>
                <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
            </HomeWrapper>
        )
    }
    // 当组件挂载完毕
    componentDidMount(){
        this.props.mapDispatchData()
    }
   
}

const mapDispatch = (dispatch) => ({
       mapDispatchData(){
        //    创建action，并且dispatch（action）
         dispatch(actionCreations.getHomeInfo())
       } 
})


export default connect(null, mapDispatch)(Home)
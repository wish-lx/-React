import React from 'react'
import List from './components/List'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import {HomeWrapper,HomeLeft, HomeRight} from './style'
class Home extends React.Component{
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                </HomeLeft>
                <HomeRight>right</HomeRight>
            </HomeWrapper>
        )
    }
}
export default Home
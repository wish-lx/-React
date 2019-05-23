import React from 'react'
import {HomeWrapper,HomeLeft, HomeRight} from './style'
class Home extends React.Component{
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>left</HomeLeft>
                <HomeRight>right</HomeRight>
            </HomeWrapper>
        )
    }
}
export default Home
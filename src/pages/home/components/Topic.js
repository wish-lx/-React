import React from 'react'
import { connect } from 'react-redux'

import {TopicWrapper, TopicItem} from '../style'
class Topic extends React.Component{
    render(){
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item) => {
                        return (
                            <TopicItem>123</TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

{/* 组件从store里面拿数据 */}
const mapStateToProps = (state)=>{
    return {
        list: state.get('home').get('topicList')
    }
}
export default connect(mapStateToProps, null)(Topic);
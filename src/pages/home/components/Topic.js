import React from 'react'
import { connect } from 'react-redux'

import {TopicWrapper, TopicItem} from '../style'
class Topic extends React.PureComponent{
    render(){
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img
                                   className='topic-pic'
                                   alt="wuyiyi"
                                   src={item.get('imgUrl')}
                                />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}
const mapStateToProps = (state)=>{
    console.log(state)
    return {
        list: state.get('home').get('topicList')
    }
}
export default connect(mapStateToProps, null)(Topic);
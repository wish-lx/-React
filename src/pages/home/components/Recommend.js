import React from 'react'
import {connect} from 'react-redux'
import {RecommendWrapper, RecommendItem} from '../style'

class Recommend extends React.Component{
    render(){
        return (
            <RecommendWrapper>
                {
                    this.props.list.map((item)=> {
                        return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommendItem>
                    })
                }
            </RecommendWrapper>
        )
    }
}
const mapState = (state) => {
    return {
        list: state.get('home').get('recommendList')
    }
}
export default connect(mapState, null)(Recommend)
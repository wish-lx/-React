import React from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {ListItem, ListInfo, LoadMore} from '../style'
import {Link} from 'react-router-dom'
class List extends React.PureComponent{
    render(){
        const {getMoreList} =this.props
        return (
            <div>
                {
                    this.props.list.map((item, index) => {
                        return (
                            <Link key={index} to='./detail'>
                                <ListItem>
                                    <img className='pic' alt="wuyiyi" src={item.get('imgUrl')}/>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                        
                    })
                }
               <LoadMore onClick={getMoreList}>更多文字</LoadMore>
           </div>
        )
    }
}
const mapState = (state) => {
    return {
        list: state.get('home').get('articleList')
    }
}
const mapDispatch = (dispatch) => ({
    getMoreList() {
        dispatch(actionCreators.getMoreList())
    }    
})
export default connect(mapState, mapDispatch)(List)
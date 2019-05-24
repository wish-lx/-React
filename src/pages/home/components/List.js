import React from 'react'
import {connect} from 'react-redux'
import {ListItem, ListInfo} from '../style'
class List extends React.Component{
    render(){
        return (
            <div>
                {
                    this.props.list.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img className='pic' alt="wuyiyi" src={item.get('imgUrl')}/>
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        )
                        
                    })
                }
           
           </div>
        )
    }
}
const mapState = (state) => {
    return {
        list: state.get('home').get('articleList')
    }
}
export default connect(mapState, null)(List);
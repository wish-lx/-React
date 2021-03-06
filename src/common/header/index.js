import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, 
    SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchItem } from './style'
import * as actionCreators from './store/actionCreator'
import {Link} from 'react-router-dom'
// import {Link} from 'react-router-dom'

class Header extends React.PureComponent{
    getListArea(){
        const {foused, list, page,totalPage, handleMouseEnter,  handleMouseLeave, mouseIn, handleChangePage, } = this.props
        console.log('list', list)
        const newList = list.toJS()
        const pageList = []
        if(newList.length){
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchItem key={newList[i]}>{newList[i]}</SearchItem> 
                )
            }
        }
        if (foused || mouseIn) {
            return (
               <SearchInfo 
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               >
               <SearchInfoTitle>
                   热门搜索
                   <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage)}>换一批</SearchInfoSwitch>
               </SearchInfoTitle>
               <SearchInfoList>
                   {pageList}
               </SearchInfoList>
           </SearchInfo>
            )
        }else {
            return null 
        }
    }
    render(){
        const {foused, InputFoucs, InputBlur, list, login} = this.props
        return (
            <HeaderWrapper>
                
                    <Logo href="/" />
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载App</NavItem>
                        {
                            login ? 
                            <NavItem className='right'>退出</NavItem>
                            : <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
                        }
                        
                        <NavItem className='right'>
                            <i className="iconfont ">&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={foused}
                                timeout={300}
                                classNames="alert">
                                <NavSearch 
                                onFocus={()=>InputFoucs(list)} 
                                onBlur={InputBlur} 
                                className={foused ? 'foused' : ''}></NavSearch>
                            </CSSTransition>
                            <i className={foused ? 'foused iconfont' : 'iconfont'}>&#xe636;</i>
                            {this.getListArea()}
                        </SearchWrapper>
    
                    </Nav>
                    <Addition>
                        <Button className="writting">
                            <i className="iconfont">&#xe615;</i>
                            写文章</Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </HeaderWrapper>
        )
    }
}

// store把数据传给组件
const mapStateToProps =(state)=>{
    console.log(state)
  return {
    foused: state.get('header').get('foused'),
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    mouseIn: state.get('header').get('mouseIn'),
    totalPage: state.get('header').get('totalPage'),
    login: state.getIn(['login','login'])
  }
}
// 组件把数据传给Store
const mapDispatchToProps = (dispatch) => {
    return {
        InputFoucs(list){
            list.size === 0 && dispatch(actionCreators.getList())
            dispatch(actionCreators.inputFocus());
        },
        InputBlur() {
            dispatch(actionCreators.inputBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage){

            console.log(page, totalPage)
           if(page < totalPage) {
            dispatch(actionCreators.changePage(++page));
           } else{
            dispatch(actionCreators.changePage(1));
           }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
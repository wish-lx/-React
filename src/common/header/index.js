import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, 
    SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchItem } from './style'
import * as actionCreators from './store/actionCreator'


class Header extends React.Component{
    getListArea(){
        if (this.props.foused) {
            return (
               <SearchInfo>
               <SearchInfoTitle>
                   热门搜索
                   <SearchInfoSwitch>换一换</SearchInfoSwitch>
               </SearchInfoTitle>
               <SearchInfoList>
                   {
                   this.props.list.map((item, index)=>{
                       return <SearchItem key={item}>{item}</SearchItem>
                   })
                }
               </SearchInfoList>
           </SearchInfo>
            )
        }else {
            return null
        }
    }
    render(){
        return (
            <HeaderWrapper>
                    <Logo href="/" />
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载App</NavItem>
                        <NavItem className='right'>登陆</NavItem>
                        <NavItem className='right'>
                            <i className="iconfont ">&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={this.props.foused}
                                timeout={300}
                                classNames="alert">
                                <NavSearch 
                                onFocus={this.props.InputFoucs} 
                                onBlur={this.props.InputBlur} 
                                className={this.props.foused ? 'foused' : ''}></NavSearch>
                            </CSSTransition>
                            <i className={this.props.foused ? 'foused iconfont' : 'iconfont'}>&#xe636;</i>
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
    list: state.get('header').get('list')
  }
}
// 组件把数据传给Store
const mapDispatchToProps = (dispatch) => {
    return {
        InputFoucs(){
            dispatch(actionCreators.getList())
            dispatch(actionCreators.inputFocus());
        },
        InputBlur() {
            dispatch(actionCreators.inputBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
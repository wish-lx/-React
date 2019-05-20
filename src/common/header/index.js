import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'

const Header = (props) => {
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
                            in={props.foused}
                            timeout={300}
                            classNames="alert">
                            <NavSearch 
                            onFocus={props.InputFoucs} 
                            onBlur={props.InputBlur} 
                            className={props.foused ? 'foused' : ''}></NavSearch>
                        </CSSTransition>
                        <i className={props.foused ? 'foused iconfont' : 'iconfont'}>&#xe636;</i>
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

// store把数据传给组件
const mapStateToProps =(state)=>{
    console.log(state)
  return {
    foused: state.header.foused
  }
}
// 组件把数据传给Store
const mapDispatchToProps = (dispatch) => {
    return {
        InputFoucs(){
            const action = {
                type: 'input-foucs'
            }
            dispatch(action);
        },
        InputBlur() {
            const action ={
                type: 'input-blur'
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
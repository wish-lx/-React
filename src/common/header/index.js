import React from 'react'
import {HeaderWrapper,Logo,Nav, NavItem, NavSearch, Addition, Button,SearchWrapper} from './style'
class Header extends React.Component{
    render() {
        return (
            <HeaderWrapper>
                <Logo href="/"/>
                <Nav>
                   <NavItem className='left active'>首页</NavItem>
                   <NavItem className='left'>下载App</NavItem>
                   <NavItem className='right'>登陆</NavItem>
                   <NavItem className='right'>
                      <i className="iconfont ">&#xe636;</i>
                   </NavItem>
                  <SearchWrapper>
                      <NavSearch></NavSearch>
                      <i className="iconfont ">&#xe636;</i>
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

export default Header
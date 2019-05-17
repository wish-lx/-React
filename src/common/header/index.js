import React from 'react'
import {HeaderWrapper,Logo,Nav, NavItem, NavSearch} from './style'
class Header extends React.Component{
    render() {
        return (
            <HeaderWrapper>
                <Logo href="/"/>
                <Nav>
                   <NavItem className='left active'>首页</NavItem>
                   <NavItem className='left'>下载App</NavItem>
                   <NavItem className='right'>Aa</NavItem>
                   <NavItem className='right'>登陆</NavItem>
                   <NavSearch></NavSearch>
                </Nav>
            </HeaderWrapper>
        )
    } 
}

export default Header
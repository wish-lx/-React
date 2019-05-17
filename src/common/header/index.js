import React from 'react'
import {HeaderWrapper,Logo,Nav, NavItem, NavSearch, Addition, Button,SearchWrapper} from './style'
class Header extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           foused: false
       }
       this.InputFoucs = this.InputFoucs.bind(this)
       this.InputBlur = this.InputBlur.bind(this)
    }
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
                  <SearchWrapper >
                      <NavSearch onFocus = {this.InputFoucs}  onBlur = {this.InputBlur} className={this.state.foused ? 'foused' : ''}></NavSearch>
                      <i className={this.state.foused ? 'foused iconfont' : 'iconfont'}>&#xe636;</i>
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
    InputFoucs() {
        this.setState({
            foused: true
        })
    }
    InputBlur() {
        this.setState({
            foused: false
        })
    }
}

export default Header
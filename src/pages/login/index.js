import React from 'react'
import { connect } from 'react-redux'
// import {actionCreators} from './store'
import {LoginWrapper,Input,LoginBox,Button} from './style'
class Login extends React.PureComponent{
    
    render(){
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号'/>
                    <Input placeholder='密码'/>
                    <Button>登陆</Button>     
                </LoginBox>
                   
                </LoginWrapper>
        )
           
        
    }
}
const mapState = (state) => ({
})
const mapDispatch = (dispatch) => ({
    
})
export default connect(mapState, mapDispatch)(Login);
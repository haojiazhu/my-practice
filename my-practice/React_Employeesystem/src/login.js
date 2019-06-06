import React from 'react';
class Login extends React.Component{
    isLogin(){
        if(this.refs.loginun.value==='admin'&&this.refs.loginpw.value==='123'){
            sessionStorage.setItem('admin','admin');
            this.props.history.push({
                pathname:'/employeeTab'
            });
        }else{
            alert('用户名或密码错误！');
        }
    }
    render(){
        return(
            <div ref='loginDiv'>
                <div>
                    <h1>login</h1>
                    UserName:<input ref='loginun' type='text'/><br/>
                    PassWord:<input ref='loginpw' type='password'/><br/>
                    <button ref='loginBtn' onClick={()=>this.isLogin()}>login</button>
                </div>
            </div>
        );
    }
}
export default Login;
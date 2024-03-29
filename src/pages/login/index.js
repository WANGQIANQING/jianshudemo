import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button, LogoImg, TitleWrapper, Form, LoginProblem, MoreSign } from './style';
import { actionCreators } from './store';
import logoPic from '../../statics/logoLogin.png';

class Login extends PureComponent {
    render() {
        const {loginStatus} = this.props;
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <Link to="/">
                        <LogoImg src={logoPic}/>
                    </Link>
                    <LoginBox>
                        <TitleWrapper>
                            <Link to="/login"><span className="login">登陆</span></Link>
                            <b>·</b>
                            <Link to="/register"><span className="register">注册</span></Link>
                        </TitleWrapper>
                        <Form>
                            <i className="iconfont account"></i>
                            <Input className="account" placeholder="手机号或邮箱" ref={(input) => {
                                this.account = input
                            }}/>
                            <i className="iconfont password"></i>
                            <Input className="password" type="password" placeholder="密码" ref={(input) => {
                                this.password = input
                            }}/>
                            <div>
                                <input type="checkbox" className="remember"/>记住我
                                <LoginProblem>登录遇到问题？</LoginProblem>
                            </div>
                        </Form>
                        <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                        <MoreSign>
                            <h6>社交账号登陆</h6>
                            <ul>
                                <li><a href=""><span id="weibo" className="iconfont">&#xe63d;</span></a></li>
                                <li><a href=""><span id="weixin" className="iconfont">&#xe679;</span></a></li>
                                <li><a href=""><span id="qq" className="iconfont">&#xe6b2;</span></a></li>
                                <li><a href=""><span id="others" className="iconfont">&#xe77f;</span></a></li>
                            </ul>
                        </MoreSign>
                    </LoginBox>
                </LoginWrapper>
            );
        } else {
            return <Redirect to='/'/>
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    }
});

export default connect(mapState, mapDispatch)(Login);
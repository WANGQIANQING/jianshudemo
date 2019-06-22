import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import {
    Button,
    Form,
    Input,
    LoginBox,
    RegisterWrapper,
    LogoImg,
    MoreSign,
    TitleWrapper,
    Promise
} from "./style";
import logoPic from "../../statics/logoLogin.png";

class Register extends PureComponent {
    render() {
        return (
            <RegisterWrapper>
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
                        <Input className="account" placeholder="你的昵称" ref={(input) => {
                            this.account = input
                        }}/>
                        <i className="iconfont phone"></i>
                        <Input className="phone" placeholder="手机号" ref={(input) => {
                            this.account = input
                        }}/>
                        <i className="iconfont password"></i>
                        <Input className="password" type="password" placeholder="设置密码" ref={(input) => {
                            this.password = input
                        }}/>
                    </Form>
                    <Button>注册</Button>
                    <Promise>
                        点击 “注册” 即表示您同意并愿意遵守简书
                        <br/>
                        <a href="">用户协议</a> 和 <a href="">隐私政策</a>。
                    </Promise>
                    <MoreSign>
                        <h6>社交账号直接注册</h6>
                        <ul>
                            <li><a href=""><span id="weibo" className="iconfont">&#xe63d;</span></a></li>
                            <li><a href=""><span id="weixin" className="iconfont">&#xe679;</span></a></li>
                            <li><a href=""><span id="qq" className="iconfont">&#xe6b2;</span></a></li>
                            <li><a href=""><span id="others" className="iconfont">&#xe77f;</span></a></li>
                        </ul>
                    </MoreSign>
                </LoginBox>
            </RegisterWrapper>
        );
    }
}

export default Register;
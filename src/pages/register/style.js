import styled from 'styled-components';

export const RegisterWrapper = styled.div`
    z-index: 0;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: #eee;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 450px;
    position: fixed;
    padding: 30px 30px 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1); 
`;

export const Input = styled.input`
    display: block;
    width: 260px;
    height: 40px;
    margin: 0  auto;
    line-height: 30px;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    outline: none;
    background-color: hsla(0,0%,71%,.1);
    &.account {
        border-bottom: none;
        border-radius: 4px 4px 0 0;
    }
    &.phone {
        border-bottom: none;
    }
    &.password {
        border-radius: 0 0 4px 4px;
    }
    &::placeholder {
        color: #b6b6b6;
        font-size: 14px;
    }
`;

export const LogoImg = styled.img`
    width: 100px;
    position: absolute;
    top: 50px;
    left: 50px;
`;


export const TitleWrapper = styled.h4`
    text-align: center;
    font-size: 18px;
    font-weight: 400px;
    margin-bottom: 20px;
    span,b {
        padding: 10px;
        color: #969696;
        display: inline-block;
    }
    
    .login:hover {
        border-bottom: 2px solid #ea6f5a;
    }
    .register {
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
    }
`;

export const Form = styled.form`

    i {
        position: relative;
    }

    i.account::before {
        content: '\\e649';
        position: absolute;
        left: 50px;
        top: 9px;
        color: #8c8c8c;
    }
    i.password::before {
        content: '\\e620';
        position: absolute;
        left: 50px;
        top: 9px;
        color: #8c8c8c;
    }
    i.phone::before {
        content: '\\e601';
        position: absolute;
        left: 50px;
        top: 9px;
        color: #8c8c8c;
    }
`;

export const MoreSign = styled.div`
    margin-top: 30px;
    text-align: center;
    font-weight: 100;
    h6 {
        font-size: 12px;
        color: #b5b5b5;
        position: relative;
    }
    
    h6::before {
        content: "";
        border-top: 1px solid #b5b5b5;
        display: block;
        position: absolute;
        width: 50px;
        left: 60px;
        top: 6px;
    }
    h6::after {
        content: "";
        border-top: 1px solid #b5b5b5;
        display: block;
        position: absolute;
        width: 50px;
        right: 60px;
        top: 6px;
    }
    
    ul li {
        margin: 0 15px;
        display: inline-block;
    }
    
    ul li a span {
        font-size: 25px;
    }
    
    #weibo {
        color: #e05244;
    }
    
    #weixin {
        color: #00bb29;
    }
    
    #qq {
        color: #498ad5;
    }
    
    #others {
        color: #999;
    }
    
    a:hover {
        text-decoration: none;
    }
    
`;

export const Button = styled.div`
    width: 260px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #42c02e;
    border-radius: 15px;
    margin: 20px auto;
    text-align: center;
    cursor: pointer;
    :hover {
        background: #3db922;
    }
`;

export const Promise = styled.p`
    padding: 0;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #969696;
    margin: 0;
    a {
        color: #3194d0 !important;
    }
`;
import styled from 'styled-components';

export const LoginWrapper = styled.div`
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
    height: 400px;
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
    &.password {
        border-radius: 0 0 4px 4px;
    }
    &::placeholder {
        color: #b6b6b6;
        font-size: 14px;
    }
`;

export const Button = styled.div`
    width: 260px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #3194d0;
    border-radius: 15px;
    margin: 10px auto;
    text-align: center;
    cursor: pointer;
    :hover {
        background: #187cb7;
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
    
    .login {
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
    }
    .register:hover {
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
        color: red;
        left: 50px;
        top: 9px;
        color: #8c8c8c;
    }
    i.password::before {
        content: '\\e620';
        position: absolute;
        color: red;
        left: 50px;
        top: 9px;
        color: #8c8c8c;
    }
    .remember {
        margin-left: 42px;
    }
    div {
        margin: 10px 0;
        position: relative;
        color: #8d8d8d;
    }
`;

export const LoginProblem = styled.span`
    position: absolute;
    right: 40px;
    font-size: 13px;
    line-height: 24px;
`;
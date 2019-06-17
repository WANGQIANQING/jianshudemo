import styled from 'styled-components';

import logoPic from '../../statics/logo.jpg';

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
`;

export const Logo = styled.div`
    height: 56px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    display: block;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
    height: 100%;
`;

export const NavItem = styled.div`

    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 4px;
        width:30px;
        line-height: 30px;
        text-align: center;
        height: 30px;
        border-radius:15px;
        &.focused {
            background: #777;
            color: white;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 40px 0 20px;
    color: #777;
    box-sizing: border-box;
    border: none;
    margin-top: 9px;
    margin-left: 20px;
    outline: none;
    font-size: 14px;
    border-radius: 19px;
    background: #eee;
    
    &::placeholder {
        color: #999;
    }
    
    &.focused {
        width: 240px;
    }
    
    &.slide-enter {
        transition: all .3s ease-out;
    }
    
    &.slide-enter-active {
        width: 240px;
    }
    
    &.slide-exit {
        transition: all .3s ease-out;
    }
    
    &.slide-exit-active {
        width: 160px;
    }
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Btn = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    border: 1px solid #ec6149;
    margin-right: 20px;
    padding: 0 20px;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    
    &.write {
        color: #fff;
        background: #ec6149;
    }
`;

export const SearchInfo = styled.div`

    :before {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 6px;
        border-color: #fff #fff transparent transparent;
        transform: rotate(-45deg);
        box-shadow: 2px -2px 5px rgba(0,0,0,.1);
        position: absolute;
        top: -4px;
        left: 40px;
    }
    position: absolute;
    left: 0;
    background: white;
    top: 56px;
    z-index: 99999;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    border-radius: 5px;
    width: 240px;
    padding:  0 20px 8px;
`;

export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .3s ease-in;
        transform-origin: center center;
    }
    cursor: pointer;
`;

export const SearchInfoItem = styled.a`
    line-height:20px;
    padding: 0 5px;
    font-size:12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
`;

export const SearchInfoList = styled.div.attrs({
    className: 'clearfix'
})``;


import styled from 'styled-components';

export const DetailWrapper = styled.div`
    width: 620px;
    margin: 0 auto;
    padding-bottom: 100px;
`;

export const Header = styled.div`
    margin: 20px 0 20px 0;
    line-height: 44px;
    font-size: 34px;
    color: #333;
    font-weight: bold;
`;

export const Content = styled.div`
    color: #2f2f2f;
    width: 620px;
    img {
        width: 620px;
    }
    p {
        margin: 25px 0;
        font-size: 16px;
        line-height: 30px;
    }
    .image-caption {
        width: 140px;
        text-align: center;
        min-height: 22px;
        display: block;
        padding: 10px;
        margin: 0 auto;
        border-bottom: 1px solid #d9d9d9;
        font-size: 14px;
        color: #969696;
        line-height: 1.7;
    }
    li {
        list-style-type: decimal;
    }
    h1,h2,h3 {
       font-size: 24px; 
       margin: 0 0 15px;
       font-weight: 700;
       color: #2f2f2f;
       line-height: 1.7;
       text-rendering: optimizelegibility;
    }
    h1 {
        font-size: 26px;
    }
    h3 {
        font-size: 22px;
    }
    blockquote {
        padding: 20px;
        margin-bottom: 25px;
        background-color: #f7f7f7;
        border-left: 6px solid #b4b4b4;
        word-break: break-word!important;
        word-break: break-all;
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
}
`;

export const Support = styled.div`
    width: 620px;
    padding: 20px 0;
    text-align: center;
    p {
        padding: 0 30px;
        margin-bottom: 20px;
        min-height: 24px;
        font-size: 17px;
        font-weight: 700;
        color: #969696;
    }
    .btn-pay {
        width: 116px;
        margin-bottom: 20px;
        padding: 8px 25px;
        font-size: 16px;
        color: #fff;
        background-color: #ea6f5a;
        border-radius: 20px;
        &:hover{
            background-color: #ce624f;
            color: #fff;
            cursor: pointer;        
        }
    }
`;
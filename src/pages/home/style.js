import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px
    float: left;
    .some {
        border-radius: 6px;
        overflow: hidden;
    }
`;

export const HomeRight = styled.div`
    width: 240px;
    float: right;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    margin-left: -18px;
`;

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    overflow: hidden;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    line-height: 30px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    
    .topic-pic {
        display: block;
        float: left;
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    
`;
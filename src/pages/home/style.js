import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    margin-right: 20px;
    padding-top: 30px
    float: left;
    .some {
        border-radius: 6px;
        overflow: hidden;
    }
`;

export const HomeRight = styled.div`
    padding: 2px 0 0;
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
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
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        width: 150px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
    }
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .title: hover {
        text-decoration:underline;
    }
    .desc {
        line-height: 18px;
        font-size: 13px;
        color: #999;
    }
`;

export const ListInfo = styled.div`
    width: 458px;
    float: left;
`;

export const RecommendWrapper = styled.div`
    width: 280px;
`;
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin: 0 0 6px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const WriterWrapper = styled.div`
    width: 280px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #a5a5a5;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
`;

export const BackTop = styled.div`
    cursor: pointer;
    position: fixed;
    width: 50px;
    right: 50px;
    bottom: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #ccc;
    span {
        font-size: 27px;
    }
`;
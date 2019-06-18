import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';

class Detail extends Component {
    render() {
        return (
            <DetailWrapper className="clearfix">
                <Header>人生若只如初见</Header>
                <Content>
                    <img src="//upload-images.jianshu.io/upload_images/10323206-5112dcf0b2d3109b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp" alt="11"/>
                    <p>每个人的心里都需要一个人

                        一棵树  一片草原

                        一间木屋  一个故乡



                        也许不必真实存有

                        却是一个不变的碑石

                        在每回想起  每次相遇 都会有

                        一点光

                        一点温暖

                        一点希望

                        ——渡兰感悟随笔</p>
                </Content>
            </DetailWrapper>
        );
    }
}

export default Detail;
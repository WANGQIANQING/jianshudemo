import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Banner from './components/banner';
import Topic from './components/topic';
import List from './components/list';
import Writter from './components/writter';
import Recommend from './components/recommend';


class Home extends Component {
    render() {
        return (
            <HomeWrapper className="clearfix">
                <HomeLeft>
                    <div className="some">
                        <Banner/>
                    </div>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writter/>
                </HomeRight>
            </HomeWrapper>
        );
    }
}

export default Home;
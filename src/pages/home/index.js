import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Banner from './banner/index';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <div>
                        <Banner/>
                    </div>
                </HomeLeft>
                <HomeRight>right</HomeRight>
            </HomeWrapper>
        );
    }
}

export default Home;
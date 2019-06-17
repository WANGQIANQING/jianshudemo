import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Banner from './components/banner';
import Topic from './components/topic';
import List from './components/list';
import Writer from './components/writer';
import Recommend from './components/recommend';
import { actionCreators } from './store';
import { connect } from 'react-redux';


class Home extends Component {

    componentDidMount() {
        this.props.changeHomeData();
    }

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
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        );
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    }
});

export default connect(null, mapDispatch)(Home);
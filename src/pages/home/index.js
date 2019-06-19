import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Banner from './components/banner';
import Topic from './components/topic';
import List from './components/list';
import Writer from './components/writer';
import Recommend from './components/recommend';
import { actionCreators } from './store';
import { connect } from 'react-redux';


class Home extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
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
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}><span className="iconfont">&#xe600;</span></BackTop> : null}
            </HomeWrapper>
        );
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});

export default connect(mapState, mapDispatch)(Home);
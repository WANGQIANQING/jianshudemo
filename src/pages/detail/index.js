import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content, Support } from './style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import { BackTop } from "../home/style";

class Detail extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
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
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{ __html: this.props.content }}/>
                <Support>
                    <p>小礼物走一走，来简书关注我</p>
                    <div className="btn btn-pay">赞赏支持</div>
                </Support>
                {this.props.showScroll ?
                    <BackTop onClick={this.handleScrollTop}><span className="iconfont">&#xe600;</span></BackTop> : null}
            </DetailWrapper>
        );
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
    showScroll: state.getIn(['detail', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));
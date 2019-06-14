import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class Topic extends Component {

    componentDidMount() {
        this.props.changeTopicList();
    }

    render() {
        const { list } = this.props;
        return (
            <TopicWrapper className="clearfix">
                {
                    list.map((item) => (
                            <TopicItem key={item.get('id')}>
                                <img className="topic-pic"
                                     src={item.get('imgUrl')}
                                     alt={item.get('title')}
                                />
                                {item.get('title')}
                            </TopicItem>
                        )
                    )
                }
            </TopicWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('topicList')
});

const MapDispatchToProps = (dispatch) => ({
    changeTopicList() {
        dispatch(actionCreators.getList());
    }
});

export default connect(mapStateToProps, MapDispatchToProps)(Topic);
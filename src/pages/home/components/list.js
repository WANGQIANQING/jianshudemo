import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style';
import pic1 from '../../../statics/listItem1.jpg';
import { connect } from 'react-redux';

class List extends Component {
    render() {
        const { list } = this.props;
        return (
            <div>
                {list.map((item) => {
                    return (
                        <ListItem className="clearfix" key={item.get('id')}>
                            <img className="pic1" src={pic1} alt="pic1"/>
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    );
                })}
            </div>


        );
    }
}

const initMapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList'])
});

export default connect(initMapStateToProps, null)(List);
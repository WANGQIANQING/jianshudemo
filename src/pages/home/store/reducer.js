import { fromJS } from 'immutable';
import pic1 from '../../../statics/logo.jpg';
const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '今日热点',
        imgUrl: pic1
    },{
        id: 2,
        title: '手绘',
        imgUrl: pic1
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
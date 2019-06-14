import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
const defaultState = fromJS({
    topicList: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TOPIC_LIST:
            return state.set('topicList', fromJS(action.data));
        default:
            return state;
    }
}
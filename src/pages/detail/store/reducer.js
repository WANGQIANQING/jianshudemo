import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    title: '',
    content: '',
    showScroll: false
});


export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            });
        case actionTypes.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show);
        default:
            return state;
    }
}
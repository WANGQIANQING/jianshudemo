import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    title: '人在低谷的时候，要学会折腾！',
    content:
});


export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
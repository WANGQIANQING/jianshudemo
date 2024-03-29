import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeDetail = (title, content) => ({
    type: actionTypes.CHANGE_DETAIL,
    title,
    content
});

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail_id=' + id + '.json').then((res) => {
            const result = res.data.data;
            dispatch(changeDetail(result.title, result.content));
        });
    }
};

export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_SCROLL_TOP,
    show
});
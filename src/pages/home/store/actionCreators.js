import * as actionTypes from './actionTypes';
import axios from 'axios';

const changeList = (data) => ({
    type: actionTypes.CHANGE_TOPIC_LIST,
    data,
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/topicList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        });
    };
};
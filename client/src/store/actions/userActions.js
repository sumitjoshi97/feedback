import axios from 'axios';
import * as actionTypes from './types';

export const fetchUser = (data) => {
    return {
        type: actionTypes.FETCH_USER,
        payload: data
    }
}

export const fetchApi = () => {
    return async dispatch => {
        const res = await axios.get('/api/current_user');
        console.log(res.data);
        dispatch(fetchUser(res.data));
    }
}
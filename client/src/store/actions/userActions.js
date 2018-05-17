import axios from 'axios';
import * as actionTypes from './types';

export const fetchUsers = (data) => {
    return {
        type: actionTypes.FETCH_USERS,
        payload: data
    }
}

export const fetchApi = () => {
    return dispatch => {
        axios.get('/api/current_user')
            .then(res => {
                dispatch(fetchUsers(res))
            })
    }
}
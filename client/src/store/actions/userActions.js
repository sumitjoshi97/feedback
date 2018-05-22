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
        dispatch(fetchUser(res.data));
    }
}

export const handleToken = (token) => {
    return async dispatch => {
        const res = await axios.post('/api/stripe', token);
        dispatch(fetchUser(res.data));
    }
}

export const submitSurvey = (values, history) => {
    return async dispatch => {
        console.log(values);
        console.log(history);
        const res = await axios.post('/api/surveys', values);

        history.push('/surveys');
        console.log(res.data)
        dispatch(fetchUser(res.data));
    }
};
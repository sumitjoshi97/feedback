import axios from 'axios';
import * as actionTypes from './types';

export const fetchSurveys = (data) => {
    return {
        type: actionTypes.FETCH_SURVEYS,
        payload: data
    }
}

export const fetchSurveysApi = () => {
    return async dispatch => {
        const res = await axios.get('/api/surveys');
        dispatch(fetchSurveys(res.data));
    }
}

export const setCurrentSurvey = survey => {
    return {
        type: actionTypes.SET_CURRENT_SURVEY,
        survey
    }
}
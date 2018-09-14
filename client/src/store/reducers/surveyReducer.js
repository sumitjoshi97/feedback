import * as actionTypes from '../actions/types';

const initialState = {
    surveys: [],
    currentSurvey: null
}
const surveyReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SURVEYS:
            return {
                ...state,
                surveys: action.payload,
                currentSurvey: null
            }

        case actionTypes.SET_CURRENT_SURVEY: 
            return {
                ...state,
                currentSurvey: action.survey
            }
            
        default:
            return state;
    }
}

export default surveyReducer;
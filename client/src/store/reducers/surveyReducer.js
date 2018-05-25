import * as actionTypes from '../actions/types';

const initialState = {
    surveys: []
}
const surveyReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SURVEYS:
            return {
                ...state,
                surveys: action.payload
            }

        default:
            return state;
    }
}

export default surveyReducer;
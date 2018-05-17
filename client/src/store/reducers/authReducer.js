import * as actionTypes from '../actions/types';

const initialState = {
    auth: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_USER: 
            return {
                ...state,
                auth: action.payload || false
            }

        default: 
            return state;
    }
}

export default reducer;

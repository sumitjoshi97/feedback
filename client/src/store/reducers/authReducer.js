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

// import { FETCH_USER } from '../actions/types';

// export default function(state = null, action) {
//   switch (action.type) {
//     case FETCH_USER:
//         console.log(action.paylaod)
//         return action.payload || false;
//     default:
//       return state;
//   }
// }

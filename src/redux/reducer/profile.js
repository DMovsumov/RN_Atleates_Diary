import { GET_PROFILE, SET_PROFILE, SET_LOADING } from '../actions/profile';

const initialState = {
    loading: false,
};

const profile = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                ...action.data,
            };
        case SET_PROFILE:
            return {
                ...state,
                ...action.data,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.data,
            };
        default:
            return state;
    }
};

export default profile;

import { SET_EMAIL, SET_NAME, SET_PASSWORD, SET_ERROR } from '../actions/auth';

const initialState = {
    email: '',
    password: '',
    name: '',
    error: '',
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload,
            };
        case SET_NAME:
            return {
                ...state,
                name: action.payload,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default auth;

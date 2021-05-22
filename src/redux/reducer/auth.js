import { SET_ERROR } from '../actions/auth';

const initialState = {
    email: '',
    password: '',
    name: '',
    error: '',
};

const auth = (state = initialState, action) => {
    switch (action.type) {
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

import { GET_PROFILE } from '../actions/profile';

const initialState = {};

const profile = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...action.data,
            };
        default:
            return state;
    }
};

export default profile;

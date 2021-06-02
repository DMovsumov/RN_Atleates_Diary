import { SWITCH_LANG, SWITCH_THEME } from '../actions/global';

const initialState = {
    theme: 'dark',
    lang: 'en',
};

const global = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_LANG: {
            return {
                ...state,
                lang: action.data,
            };
        }
        case SWITCH_THEME: {
            return {
                ...state,
                theme: action.data,
            };
        }
        default:
            return state;
    }
};

export default global;

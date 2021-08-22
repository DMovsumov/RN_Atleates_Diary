import { SWITCH_LANG, SWITCH_THEME, SET_MESSAGE } from '../actions/global';

const initialState = {
    theme: 'dark',
    lang: 'en',
    message: {
        type: '',
        text: '',
    },
};

const global = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_LANG:
            return {
                ...state,
                lang: action.data,
            };
        case SWITCH_THEME:
            return {
                ...state,
                theme: action.data,
            };
        case SET_MESSAGE:
            return {
                ...state,
                message: action.data,
            };
        default:
            return state;
    }
};

export default global;

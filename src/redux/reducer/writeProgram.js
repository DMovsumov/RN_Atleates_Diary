import { SET_PROGRAMS_AREA, SET_PROGRAMS_DIFFICULT, SET_PROGRAMS_GENDER, SET_PROGRAMS_TITLE } from '../actions/writeProgram';

const initialState = {
    author: {
        name: '',
        role: '',
    },
    title: '',
    description: '',
    img: '',
    difficult: '',
    gender: '',
    exercises: [],
};

const writeProgram = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROGRAMS_TITLE:
            return {
                ...state,
                title: action.payload,
            };
        case SET_PROGRAMS_AREA:
            return {
                ...state,
                description: action.payload,
            };
        case SET_PROGRAMS_GENDER:
            return {
                ...state,
                gender: action.payload,
            };
        case SET_PROGRAMS_DIFFICULT:
            return {
                ...state,
                difficult: action.payload,
            };
        default:
            return state;
    }
};

export default writeProgram;

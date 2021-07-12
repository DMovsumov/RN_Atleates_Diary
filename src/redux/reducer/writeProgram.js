import {
    SET_PROGRAMS_AREA,
    SET_PROGRAMS_DIFFICULT,
    SET_PROGRAMS_GENDER,
    SET_PROGRAMS_TITLE,
    ADD_EXERCISE,
    DELETE_EXERCISE,
    SET_PROGRAMS_IMAGE,
    SET_ACTIVE_DAY,
    SET_ACTIVE_WEEK,
    UPDATE_EXERCISES_WEEK,
} from '../actions/writeProgram';

const initialState = {
    activeDay: 1,
    activeWeek: 1,
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
    tempImage: {},
};

const writeProgram = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_DAY:
            return {
                ...state,
                activeDay: action.payload,
            };
        case SET_ACTIVE_WEEK:
            return {
                ...state,
                activeWeek: action.payload,
            };
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
        case SET_PROGRAMS_IMAGE:
            return {
                ...state,
                img: action.payload.uri,
                tempImage: {
                    fileName: action.payload.fileName,
                },
            };
        case UPDATE_EXERCISES_WEEK:
            return {
                ...state,
                exercises: action.payload,
            };
        case ADD_EXERCISE:
            return {
                ...state,
                exercises: [...state.exercises, ...action.payload],
            };
        case DELETE_EXERCISE:
            return {
                ...state,
                exercises: [...action.payload],
            };
        default:
            return state;
    }
};

export default writeProgram;

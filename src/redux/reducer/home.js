import { GET_DATA_DIARY, GET_EXERCISE_ACTIVE_LIST_PROGRAM, SET_TIMER } from '../actions/home';

const initialState = {
    program: {
        id: '',
        author: '',
        img: '',
    },
    exerciseList: [],
    timer: '00:00:00',
};

const home = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_DIARY:
            return {
                ...state,
                ...action.payload,
            };
        case GET_EXERCISE_ACTIVE_LIST_PROGRAM:
            return {
                ...state,
                exerciseList: [...action.payload],
            };
        case SET_TIMER:
            return {
                ...state,
                timer: action.payload,
            };
        default:
            return state;
    }
};

export default home;

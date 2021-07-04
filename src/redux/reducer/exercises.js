import { GET_FILTERS_EXERCISE, GET_EXERCISE_LIST_PROGRAM } from '../actions/exercises';

const initialState = {
    exerciseList: [],
    exerciseListProgram: [],
};

const exercises = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILTERS_EXERCISE:
            return {
                ...state,
                exerciseList: [...action.payload],
            };
        case GET_EXERCISE_LIST_PROGRAM:
            return {
                ...state,
                exerciseListProgram: [...action.payload],
            };
        default:
            return state;
    }
};

export default exercises;

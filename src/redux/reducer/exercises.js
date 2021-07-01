import { GET_FILTERS_EXERCISE } from '../actions/exercises';

const initialState = {
    exerciseList: [],
};

const exercises = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILTERS_EXERCISE:
            return {
                exerciseList: [...action.payload],
            };
        default:
            return state;
    }
};

export default exercises;

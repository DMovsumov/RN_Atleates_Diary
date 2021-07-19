import database from '@react-native-firebase/database';

export const SET_PROGRAMS_TITLE = 'SET_PROGRAMS_TITLE';
export const setProgramsTitle = title => dispatch => {
    dispatch({
        type: SET_PROGRAMS_TITLE,
        payload: title,
    });
};

export const SET_PROGRAMS_AREA = 'SET_PROGRAMS_AREA';
export const setProgramsArea = area => dispatch => {
    dispatch({
        type: SET_PROGRAMS_AREA,
        payload: area,
    });
};

export const SET_PROGRAMS_GENDER = 'SET_PROGRAMS_GENDER';
export const setProgramsGender = gender => dispatch => {
    dispatch({
        type: SET_PROGRAMS_GENDER,
        payload: gender,
    });
};

export const SET_PROGRAMS_DIFFICULT = 'SET_PROGRAMS_DIFFICULT';
export const setProgramsDifficult = difficult => dispatch => {
    dispatch({
        type: SET_PROGRAMS_DIFFICULT,
        payload: difficult,
    });
};

export const SET_PROGRAMS_IMAGE = 'SET_PROGRAMS_IMAGE';
export const setProgramsImage = image => dispatch => {
    dispatch({
        type: SET_PROGRAMS_IMAGE,
        payload: image,
    });
};

export const ADD_EXERCISE = 'ADD_EXERCISE';
export const addExercise = exercise => dispatch => {
    dispatch({
        type: ADD_EXERCISE,
        payload: [exercise],
    });
};

export const DELETE_EXERCISE = 'DELETE_EXERCISE';
export const deleteExercise = (exercises, docTitle) => dispatch => {
    const newList = [...exercises];
    const index = newList.findIndex(item => item.docTitle === docTitle);

    newList.splice(index, 1);

    dispatch({
        type: DELETE_EXERCISE,
        payload: newList,
    });
};

export const UPDATE_EXERCISES_WEEK = 'UPDATE_EXERCISES_WEEK';
export const updateExercisesWeek = exercises => dispatch => {
    dispatch({
        type: UPDATE_EXERCISES_WEEK,
        payload: exercises,
    });
};

export const SET_ACTIVE_DAY = 'SET_ACTIVE_DAY';
export const setActiveDay = day => dispatch => {
    dispatch({
        type: SET_ACTIVE_DAY,
        payload: day,
    });
};

export const SET_ACTIVE_WEEK = 'SET_ACTIVE_WEEK';
export const setActiveWeek = week => dispatch => {
    dispatch({
        type: SET_ACTIVE_WEEK,
        payload: week,
    });
};

export const submitProgram = (type, program) => async dispatch => {
    try {
        if (type === 'save') {
            const key = await database().ref().child('AllPrograms').push().key();
            console.log(key);

            const data = {
                id: key,
                ...program,
            };
        }
    } catch (e) {}
};

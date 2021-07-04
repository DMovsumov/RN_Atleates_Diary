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

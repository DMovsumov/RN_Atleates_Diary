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

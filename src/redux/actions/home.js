import database from '@react-native-firebase/database';

export const GET_DATA_DIARY = 'GET_DATA_DIARY';
export const getDataDiary = uid => async dispatch => {
    const data = (await database().ref(`/Users/${uid}/Diary`).once('value')).toJSON();

    dispatch({
        type: GET_DATA_DIARY,
        payload: data,
    });
};

export const GET_EXERCISE_ACTIVE_LIST_PROGRAM = 'GET_EXERCISE_ACTIVE_LIST_PROGRAM';
export const getExercisesProgram = id => async dispatch => {
    const data = [];
    const exerciseList = (await database().ref(`/Programs/${id}/exercises`).once('value')).toJSON();

    for (let exerciseItem of exerciseList) {
        const exercise = (await database().ref(`/Exercise/${exerciseItem.typeExercise}/${exerciseItem.docTitle}/`).once('value')).toJSON();
        await data.push({ ...exerciseItem, ...exercise });
    }

    dispatch({
        type: GET_EXERCISE_ACTIVE_LIST_PROGRAM,
        payload: data,
    });
};

export const SET_TIMER = 'SET_TIMER';
export const setTimer = time => dispatch => {
    dispatch({
        type: SET_TIMER,
        payload: time,
    });
};

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

    for (let i = 0; i < exerciseList.length; i++) {
        const exercise = (
            await database().ref(`/Exercise/${exerciseList[i].typeExercise}/${exerciseList[i].docTitle}/`).once('value')
        ).toJSON();
        await data.push({ ...exerciseList[i], ...exercise, id: exerciseList[i].docTitle + i });
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

export const SET_NEW_EXERCISE_LIST = 'SET_NEW_EXERCISE_LIST';
export const setNewExerciseList = exerciseList => dispatch => {
    dispatch({
        type: SET_NEW_EXERCISE_LIST,
        payload: exerciseList,
    });
};

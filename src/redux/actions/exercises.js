import database from '@react-native-firebase/database';

export const GET_FILTERS_EXERCISE = 'GET_FILTERS_EXERCISE';
export const getFiltersExercise = (exerciseType, activeMuscle) => async dispatch => {
    let data = [];

    if (exerciseType) {
        const values = (await database().ref(`/Exercise/${exerciseType}`).once('value')).toJSON();
        data = await Object.values(values);
    }

    if (activeMuscle) {
        const values = (
            await database().ref(`/Exercise/${exerciseType}`).orderByChild('muscleGroup').equalTo(`${activeMuscle}`).once('value')
        ).toJSON();
        data = await Object.values(values);
    }

    dispatch({
        type: GET_FILTERS_EXERCISE,
        payload: data,
    });
};

export const GET_EXERCISE_LIST_PROGRAM = 'GET_EXERCISE_LIST_PROGRAM';
export const getExercisesProgram = exerciseList => async dispatch => {
    const data = [];

    for (let exerciseItem of exerciseList) {
        const exercise = (await database().ref(`/Exercise/${exerciseItem.typeExercise}/${exerciseItem.docTitle}/`).once('value')).toJSON();
        data.push({ ...exerciseItem, ...exercise });
    }

    dispatch({
        type: GET_EXERCISE_LIST_PROGRAM,
        payload: data,
    });
};

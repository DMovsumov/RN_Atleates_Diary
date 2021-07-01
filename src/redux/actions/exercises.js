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

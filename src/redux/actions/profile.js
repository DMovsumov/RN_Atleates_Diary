export const GET_PROFILE = 'GET_PROFILE';
export const getProfile = uid => ({
    url: `/Users/${uid}/profile`,
    params: {
        type: 'get',
    },
    errors: {
        texts: '',
    },
    types: {
        pending: '',
    },
    callback({ dispatch, getState }, data) {
        dispatch({
            type: GET_PROFILE,
            data,
        });
    },
});

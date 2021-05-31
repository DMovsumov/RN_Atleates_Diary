export const SET_PROFILE = 'SET_PROFILE';
export const setProfile = (uid, data) => ({
    url: `/Users/${uid}/profile`,
    params: {
        type: 'post',
        typeDataBase: 'update',
    },
    data: data,
    errors: {
        texts: '',
    },
    types: {
        pending: '',
        success: SET_PROFILE,
    },
    // callback({ dispatch }) {
    //     dispatch(getProfile(uid));
    // },
});

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
        success: GET_PROFILE,
    },
    // callback({ dispatch, getState }, data) {
    //     dispatch({
    //         type: GET_PROFILE,
    //         data,
    //     });
    // },
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = loading => dispatch => {
    dispatch({
        type: SET_LOADING,
        data: loading,
    });
};

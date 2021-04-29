import auth from '@react-native-firebase/auth';

export const CREATE_NEW_USER_WITH_EMAIL = 'CREATE_NEW_USER_WITH_EMAIL';
export const createUserWithEmail = (email, password) => async dispatch => {
    const data = await auth().createUserWithEmailAndPassword(email, password);

    await console.log(data);
};

export const SET_EMAIL = 'SET_EMAIL';
export const setEmail = email => dispatch => {
    dispatch({
        type: SET_EMAIL,
        payload: email,
    });
};

export const SET_PASSWORD = 'SET_PASSWORD';
export const setPassword = password => dispatch => {
    dispatch({
        type: SET_PASSWORD,
        payload: password,
    });
};

export const SET_NAME = 'SET_NAME';
export const setName = name => dispatch => {
    dispatch({
        type: SET_NAME,
        payload: name,
    });
};

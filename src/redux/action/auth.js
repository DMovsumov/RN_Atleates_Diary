import auth from '@react-native-firebase/auth';

export const CREATE_NEW_USER_WITH_EMAIL = 'CREATE_NEW_USER_WITH_EMAIL';
export const createUserWithEmail = (
    email,
    password,
    name,
) => async dispatch => {
    try {
        const { user } = await auth().createUserWithEmailAndPassword(
            email,
            password,
        );

        const { uid, emailVerified, metadata } = user;

        if (!emailVerified) {
            const verified = await auth().currentUser.sendEmailVerification();

            await console.log('verified', verified);

            // const profile = await
        }
        await console.log(uid);
    } catch (e) {
        console.log(e.code);
        console.log(e.message);
    }
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

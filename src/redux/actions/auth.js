import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const CREATE_NEW_USER_WITH_EMAIL = 'CREATE_NEW_USER_WITH_EMAIL';
export const createUserWithEmail =
    (email, password, name) => async dispatch => {
        try {
            const {
                user: { uid, emailVerified, metadata },
            } = await auth().createUserWithEmailAndPassword(email, password);

            await console.log(uid);

            const profile = await database()
                .ref(`/Users/${uid}`)
                .set({
                    profile: {
                        uid: uid,
                        metadata: metadata,
                        auth: 'email/pass',
                        userName: name,
                        email: email,
                        role: 'user',
                        firstName: '',
                        lastName: '',
                        units: {
                            weight: 'Kg',
                            height: 'Cm',
                        },
                    },
                });

            await console.log('success', profile);

            if (!emailVerified) {
                await auth().currentUser.sendEmailVerification();
            }
        } catch (e) {
            console.log(e.code);
            console.log(e.message);
            dispatch(setError(e.code));
        }
    };

export const SET_ERROR = 'SET_ERROR';
export const setError = error => dispatch => {
    dispatch({
        type: SET_ERROR,
        payload: error,
    });
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

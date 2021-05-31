import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {GET_PROFILE, getProfile} from './profile';

export const CREATE_NEW_USER_WITH_EMAIL = 'CREATE_NEW_USER_WITH_EMAIL';
export const createUserWithEmail = (email, password, name) => async dispatch => {
    try {
        const {
            user: { uid, emailVerified, metadata },
        } = await auth().createUserWithEmailAndPassword(email, password);

        await console.log(uid);

        await database()
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

        if (!emailVerified) {
            await auth().currentUser.sendEmailVerification();
        }
    } catch (e) {
        dispatch(setErrors(e.code));
    }
};

export const LOGIN_USER_WITH_EMAIL = 'LOGIN_USER_WITH_EMAIL';
export const loginUserWithEmail = (email, password) => async dispatch => {
    try {
        const {
            user: { email, uid },
        } = await auth().signInWithEmailAndPassword(email, password);

        // const profile = await database().ref(`/Users/${uid}`).once('value');
        await console.log(uid);
        await dispatch(getProfile(uid));
    } catch (e) {
        console.log(e.code);
        dispatch(setErrors(e.code));
    }
};

export const createUser = ({ uid, email, name, metadata }) => ({
    url: `/Users/${uid}`,
    params: {
        type: 'post',
        typeDataBase: 'set',
    },
    data: {
        profile: {
            uid: uid,
            displayName: name,
            email: email,
            metadata,
            role: 'user',
            firstName: '',
            lastName: '',
            units: {
                weight: 'Kg',
                height: 'Cm',
            },
        },
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

export const SET_ERROR = 'SET_ERROR';
export const setErrors = error => dispatch => {
    dispatch({
        type: SET_ERROR,
        payload: error,
    });
};

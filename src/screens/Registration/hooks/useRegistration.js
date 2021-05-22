import useTranslates from '../../../i18n/useTranslates';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
    createUserWithEmail,
    setEmail,
    setError,
    setName,
    setPassword,
} from '../../../redux/actions/auth';

const useRegistration = navigation => {
    const texts = useTranslates(
        'all.sign.up',
        'login.email',
        'login.password',
        'all.sign.up.name',
        'all.sign.up.back',
        'auth.error.email.used',
        'auth.error.weak.password',
        'auth.error.invalid.email',
    );
    const { email, password, name, error } = useSelector(({ auth }) => auth);
    const [valid, setValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const dispatch = useDispatch();
    const {
        authErrorEmailUsed,
        authErrorWeakPassword,
        authErrorInvalidEmail,
    } = texts;

    const handleChangeEmail = text => {
        dispatch(setEmail(text));
        dispatch(setError(''));
    };

    const handleChangePass = text => {
        dispatch(setPassword(text));
        dispatch(setError(''));
    };

    const handleChangeName = text => {
        dispatch(setName(text));
        dispatch(setError(''));
    };

    const onSubmit = async () => {
        await dispatch(createUserWithEmail(email, password, name));
    };

    const goBack = () => {
        navigation.push('Login');
    };

    const errorMessages = () => {
        switch (error) {
            case 'auth/email-already-in-use':
                return { type: 'email', texts: authErrorEmailUsed };
            case 'auth/weak-password':
                return { type: 'password', texts: authErrorWeakPassword };
            case 'auth/invalid-email':
                return { type: 'email', texts: authErrorInvalidEmail };
        }
    };

    useEffect(() => {
        if (error !== '') {
            setValid(false);
            setErrorMessage(errorMessages());
        } else {
            setErrorMessage(undefined);
        }
    }, [error]);

    return {
        texts,
        valid,
        errorMessage,
        handleChangeEmail,
        handleChangePass,
        handleChangeName,
        goBack,
        onSubmit,
    };
};

export default useRegistration;

import useTranslates from '../../../i18n/useTranslates';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';

const useLogin = navigation => {
    const texts = useTranslates(
        'login.email',
        'login.password',
        'login.forgot.password',
        'all.sign.in',
        'login.register.title',
        'all.sign.up',
        'auth.error.invalid.email',
        'auth.error.weak.password',
        'auth.login.error',
        'auth.login.error.user.disable',
        'auth.login.error.user.notfound',
    );
    const { authLoginError, authLoginErrorUserDisable, authLoginErrorUserNotfound } = texts;
    const dispatch = useDispatch();
    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
        watch,
        clearErrors,
    } = useForm();
    const { error } = useSelector(({ auth }) => auth);
    const fields = ['email', 'password'];
    const [email, password] = watch(fields);
    const [enabled, setEnable] = useState(false);
    const [loading, setLoading] = useState(false);

    const goRegister = () => {
        navigation.push('Registration');
    };

    const goForgotPassword = () => {
        navigation.push('Forgot Password');
    };

    const onSubmit = async () => {
        await clearErrors();
        await setLoading(true);

        try {
            await auth().signInWithEmailAndPassword(email, password);

            await setLoading(false);
        } catch (e) {
            switch (e.code) {
                case 'auth/wrong-password':
                    return setError('errors', { message: authLoginError });
                case 'auth/invalid-email':
                    return setError('errors', { message: authLoginError });
                case 'auth/user-disabled':
                    return setError('errors', { message: authLoginErrorUserDisable });
                case 'auth/user-not-found':
                    return setError('errors', { message: authLoginErrorUserNotfound });
            }
        }
    };

    useEffect(() => {
        if (email && password) {
            setEnable(email && password);
        } else {
            setEnable(false);
        }
    }, [dispatch, email, password]);

    return {
        texts,
        control,
        handleSubmit,
        errors,
        enabled,
        loading,
        onSubmit,
        goRegister,
        goForgotPassword,
    };
};

export default useLogin;

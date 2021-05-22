import useTranslates from '../../../i18n/useTranslates';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createUserWithEmail, setErrors } from '../../../redux/actions/auth';
import { useForm } from 'react-hook-form';

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
        'auth.register.name.error.minlenght',
        'auth.register.name.error.maxlenght',
    );
    const { error } = useSelector(({ auth }) => auth);
    const [enabled, setEnable] = useState(false);
    const dispatch = useDispatch();
    const { authErrorEmailUsed, authErrorWeakPassword, authErrorInvalidEmail } = texts;
    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
        setError,
        watch,
    } = useForm();
    const fields = ['name', 'email', 'password'];
    const [userName, email, password] = watch(fields);

    const onSubmit = async () => {
        await dispatch(setErrors(''));
        await dispatch(createUserWithEmail(email, password, name));
    };

    const goBack = () => {
        navigation.push('Login');
    };

    useEffect(() => {
        switch (error) {
            case 'auth/email-already-in-use':
                return setError('email', { message: authErrorEmailUsed });
            case 'auth/weak-password':
                return setError('password', { message: authErrorWeakPassword });
            case 'auth/invalid-email':
                return setError('email', { message: authErrorInvalidEmail });
        }
    }, [authErrorEmailUsed, authErrorInvalidEmail, authErrorWeakPassword, error, setError]);

    useEffect(() => {
        if (userName && email && password) {
            setEnable(userName && email && password);
        } else {
            setEnable(false);
        }
    }, [email, password, userName]);

    return {
        texts,
        enabled,
        errors,
        control,
        setValue,
        handleSubmit,
        goBack,
        onSubmit,
    };
};

export default useRegistration;

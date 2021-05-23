import useTranslates from '../../../i18n/useTranslates';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createUser, createUserWithEmail, setErrors } from '../../../redux/actions/auth';
import { useForm } from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import { clearErrors } from 'react-native/Libraries/LogBox/Data/LogBoxData';

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
    const [enabled, setEnable] = useState(false);
    const [loading, setLoading] = useState(false);
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
    const [name, email, password] = watch(fields);

    const onSubmit = async () => {
        await setLoading(true);

        try {
            const {
                user: { uid, emailVerified, metadata },
            } = await auth().createUserWithEmailAndPassword(email, password);

            await dispatch(createUser({ uid, email, name, metadata }));

            if (!emailVerified) {
                await auth().currentUser.sendEmailVerification();
            }

            await setLoading(false);
        } catch (e) {
            await setLoading(false);
            switch (e.code) {
                case 'auth/email-already-in-use':
                    return setError('email', { message: authErrorEmailUsed });
                case 'auth/weak-password':
                    return setError('password', { message: authErrorWeakPassword });
                case 'auth/invalid-email':
                    return setError('email', { message: authErrorInvalidEmail });
            }
        }
    };

    const goBack = () => {
        navigation.push('Login');
    };

    useEffect(() => {
        if (name && email && password) {
            setEnable(name && email && password);
        } else {
            setEnable(false);
            clearErrors();
        }
    }, [email, password, name]);

    return {
        texts,
        enabled,
        errors,
        control,
        setValue,
        loading,
        handleSubmit,
        goBack,
        onSubmit,
    };
};

export default useRegistration;

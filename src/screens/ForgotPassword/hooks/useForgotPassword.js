import { useForm } from 'react-hook-form';
import useTranslates from '../../../i18n/useTranslates';
import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';

const useForgotPassword = navigation => {
    const texts = useTranslates(
        'login.email',
        'auth.error.invalid.email',
        'auth.reset.password.desc',
        'all.sign.up.back',
        'auth.reset.password.finishmessage',
    );
    const [enabled, setEnabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [finish, setFinish] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
        watch,
        clearErrors,
    } = useForm();
    const fields = ['email'];
    const [email] = watch(fields);

    const onSubmit = async () => {
        await clearErrors();
        try {
            await setLoading(true);
            await auth().sendPasswordResetEmail(email);
            await setLoading(false);
            await setFinish(true);
        } catch (e) {
            setLoading(false);
            return setError('error', { message: e.message });
        }
    };

    const goBack = () => {
        return navigation.goBack();
    };

    useEffect(() => {
        if (email) {
            setEnabled(email);
        } else {
            setEnabled(false);
        }
    }, [email]);

    return {
        control,
        errors,
        handleSubmit,
        texts,
        enabled,
        loading,
        email,
        finish,
        goBack,
        onSubmit,
    };
};

export default useForgotPassword;

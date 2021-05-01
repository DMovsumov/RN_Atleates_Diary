import useTranslates from '../../../i18n/useTranslates';

const useLogin = navigation => {
    const texts = useTranslates(
        'login.email',
        'login.password',
        'login.forgot.password',
        'all.sign.in',
        'login.register.title',
        'all.sign.up',
    );

    const goRegister = () => {
        navigation.push('Register');
    };

    return {
        texts,
        goRegister
    };
};

export default useLogin;

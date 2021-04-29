import useTranslates from '../../../i18n/useTranslates';

const useLogin = () => {
    const texts = useTranslates(
        'login.email',
        'login.password',
        'login.forgot.password',
        'all.sign.in',
    );

    return {
        texts,
    };
};

export default useLogin;

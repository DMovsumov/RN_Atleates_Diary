import useTranslates from '../../../i18n/useTranslates';

const useLogin = () => {
    const texts = useTranslates('login.email');

    return {
        texts,
    };
};

export default useLogin;

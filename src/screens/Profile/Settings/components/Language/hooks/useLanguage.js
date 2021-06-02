import useTranslates from '../../../../../../i18n/useTranslates';

const useLanguage = () => {
    const texts = useTranslates('profile.settings.switchLanguage');

    return {
        texts,
    };
};

export default useLanguage;

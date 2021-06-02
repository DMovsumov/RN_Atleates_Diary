import useTranslates from '../../../../../../i18n/useTranslates';

const useTheme = () => {
    const texts = useTranslates('profile.settings.switchThemeDark', 'profile.settings.switchThemeLight');

    return {
        texts,
    };
};

export default useTheme;

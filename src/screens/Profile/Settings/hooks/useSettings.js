import useTranslates from '../../../../i18n/useTranslates';
import { useDispatch, useSelector } from 'react-redux';
import { switchLanguage, switchTheme } from '../../../../redux/actions/global';

const useSettings = () => {
    const dispatch = useDispatch();
    const texts = useTranslates('profile.settings.title');
    const { lang, theme } = useSelector(({ global }) => global);

    const handleSwitchLang = async () => {
        lang === 'en' ? await dispatch(switchLanguage('ru')) : await dispatch(switchLanguage('en'));
    };

    const handleSwitchTheme = async () => {
        theme === 'dark' ? await dispatch(switchTheme('light')) : await dispatch(switchTheme('dark'));
    };

    return {
        texts,
        lang,
        theme,
        handleSwitchLang,
        handleSwitchTheme,
    };
};

export default useSettings;

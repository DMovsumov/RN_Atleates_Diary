import React from 'react';
import MainLayout from '../../../layouts/MainLayout';
import useSettings from './hooks/useSettings';
import Language from './components/Language';
import Theme from './components/Theme';

const Settings = ({ navigation }) => {
    const {
        texts: { profileSettingsTitle },
        lang,
        theme,
        handleSwitchLang,
        handleSwitchTheme,
    } = useSettings();

    return (
        <MainLayout title={profileSettingsTitle} back navigation={navigation}>
            <Language onPress={handleSwitchLang} lang={lang} />
            <Theme onPress={handleSwitchTheme} theme={theme} />
        </MainLayout>
    );
};

export default Settings;

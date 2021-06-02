import React from 'react';
import MyAccount from '../../assets/profileIcons/myAccount';
import { useSelector } from 'react-redux';
import Settings from '../../assets/profileIcons/settings';
import Statistics from '../../assets/profileIcons/statistics';
import Subscriptions from '../../assets/profileIcons/subscriptions';
import Question from '../../assets/profileIcons/questions';
import Language from '../../assets/profileIcons/language';
import Moon from '../../assets/profileIcons/moon';
import Sun from '../../assets/profileIcons/sun';

const ItemIcons = ({ iconName, color }) => {
    const { theme } = useSelector(({ global }) => global);
    const colorTheme = (theme !== 'dark' && '#1A1B1E') || color;

    if (iconName === 'MyAccount') {
        return <MyAccount color={colorTheme} />;
    }

    if (iconName === 'Settings') {
        return <Settings color={colorTheme} />;
    }

    if (iconName === 'Statistics') {
        return <Statistics color={colorTheme} />;
    }

    if (iconName === 'Subscriptions') {
        return <Subscriptions color={colorTheme} />;
    }

    if (iconName === 'Question') {
        return <Question color={colorTheme} />;
    }

    if (iconName === 'Language') {
        return <Language color={colorTheme} />;
    }

    if (iconName === 'Dark') {
        return <Moon color={colorTheme} />;
    }

    if (iconName === 'Light') {
        return <Sun color={colorTheme} />;
    }

    return <></>;
};

export default ItemIcons;

import React from 'react';
import MyAccount from '../../assets/profileIcons/myAccount';
import { useSelector } from 'react-redux';
import Settings from '../../assets/profileIcons/settings';
import Statistics from '../../assets/profileIcons/statistics';
import Subscriptions from '../../assets/profileIcons/subscriptions';
import Question from '../../assets/profileIcons/questions';

const ItemIcons = ({ iconName, color }) => {
    const { theme } = useSelector(({ global }) => global);
    const colorTheme = theme !== 'dark' && '#1A1B1E';

    if (iconName === 'MyAccount') {
        return <MyAccount color={colorTheme} />;
    }

    if (iconName === 'Settings') {
        return <Settings color={colorTheme} />;
    }

    if (iconName === 'Statistics') {
        return <Statistics color={color} />;
    }

    if (iconName === 'Subscriptions') {
        return <Subscriptions color={color} />;
    }

    if (iconName === 'Question') {
        return <Question color={color} />;
    }

    return <></>;
};

export default ItemIcons;

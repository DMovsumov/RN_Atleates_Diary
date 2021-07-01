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
import Strength from '../../assets/programIcons/strength';
import Cardio from '../../assets/programIcons/cardio';
import Swim from '../../assets/programIcons/swim';
import Aerobics from '../../assets/programIcons/aerobics';
import Yoga from '../../assets/programIcons/yoga';
import Balance from '../../assets/programIcons/balance';
import Back from '../../assets/programIcons/back';
import Arm from '../../assets/programIcons/arm';
import Chest from '../../assets/programIcons/chest';
import Legs from '../../assets/programIcons/legs';
import Shoulders from '../../assets/programIcons/shoulders';

const ItemIcons = ({ iconName, color }) => {
    const { theme } = useSelector(({ global }) => global);
    const colorTheme = color || (theme !== 'dark' && '#1A1B1E');

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

    if (iconName === 'Strength') {
        return <Strength color={colorTheme} />;
    }

    if (iconName === 'Cardio') {
        return <Cardio color={colorTheme} />;
    }

    if (iconName === 'Swim') {
        return <Swim color={colorTheme} />;
    }

    if (iconName === 'Aerobics') {
        return <Aerobics color={colorTheme} />;
    }

    if (iconName === 'Yoga') {
        return <Yoga color={colorTheme} />;
    }

    if (iconName === 'Balance') {
        return <Balance color={colorTheme} />;
    }

    if (iconName === 'Back') {
        return <Back color={colorTheme} />;
    }

    if (iconName === 'Arm') {
        return <Arm color={colorTheme} />;
    }

    if (iconName === 'Chest') {
        return <Chest color={colorTheme} />;
    }

    if (iconName === 'Legs') {
        return <Legs color={colorTheme} />;
    }

    if (iconName === 'Shoulders') {
        return <Shoulders color={colorTheme} />;
    }

    return <></>;
};

export default ItemIcons;

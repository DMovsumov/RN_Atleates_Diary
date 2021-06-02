import React from 'react';
import { Block, Wrapper } from './styled.index';
import ItemIcons from '../../../../../components/ItemIcon';
import Texts from '../../../../../components/Texts';
import useTheme from './hooks/useTheme';
import { Switch } from 'react-native';

const Theme = ({ theme, onPress }) => {
    const {
        texts: { profileSettingsSwitchthemelight, profileSettingsSwitchthemedark },
    } = useTheme();

    return (
        <Wrapper>
            <Block>
                <ItemIcons iconName={theme === 'dark' ? 'Light' : 'Dark'} />
                <Texts
                    text={theme === 'dark' ? profileSettingsSwitchthemelight : profileSettingsSwitchthemedark}
                    style={{ marginLeft: 18 }}
                />
            </Block>
            <Switch
                onValueChange={onPress}
                value={theme === 'light'}
                ios_backgroundColor={'#AAB2BA'}
                trackColor={{ false: '#beb69e', true: '#41e057' }}
            />
        </Wrapper>
    );
};

export default Theme;

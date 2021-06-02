import React from 'react';
import { Switch } from 'react-native';
import { Block, Wrapper } from './styled.index';
import ItemIcons from '../../../../../components/ItemIcon';
import Texts from '../../../../../components/Texts';
import useLanguage from './hooks/useLanguage';

const Language = ({ onPress, lang }) => {
    const {
        texts: { profileSettingsSwitchlanguage },
    } = useLanguage();

    return (
        <Wrapper>
            <Block>
                <ItemIcons iconName="Language" />
                <Texts text={profileSettingsSwitchlanguage} style={{ marginLeft: 18 }} />
            </Block>
            <Switch
                onValueChange={onPress}
                value={lang === 'en'}
                ios_backgroundColor={'#AAB2BA'}
                trackColor={{ false: '#beb69e', true: '#81b0ff' }}
            />
        </Wrapper>
    );
};

export default Language;

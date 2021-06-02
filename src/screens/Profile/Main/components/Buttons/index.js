import React from 'react';
import { Block, ButtonPress, ButtonView, Wrapper, TextButton, ButtonInfoBlock } from './styled.index';
import ItemIcons from '../../../../../components/ItemIcon';
import useButtons from './hooks/useButtons';
import ArrowBack from '../../../../../assets/arrowBack';
import { useSelector } from 'react-redux';

const Item = ({ type, iconName, title, pressHandle }) => {
    const { theme } = useSelector(({ global }) => global);

    return (
        <ButtonPress onPress={pressHandle} type={type} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]} theme={theme}>
            <ButtonView>
                <ButtonInfoBlock>
                    <ItemIcons iconName={iconName} />
                    <TextButton text={title} />
                </ButtonInfoBlock>
                <ArrowBack height={24} right color={theme === 'dark' ? '#fefefe' : '#1A1B1E'} />
            </ButtonView>
        </ButtonPress>
    );
};

const Buttons = ({ goTo }) => {
    const {
        texts: { profileMyaccountTitle, profileSettingsTitle, profileStatisticsTitle, profileSubscriptionsTitle, profileQuestionTitle },
    } = useButtons();

    return (
        <Wrapper>
            <Block>
                <Item iconName="MyAccount" title={profileMyaccountTitle} pressHandle={() => goTo('MyAccount')} />
                <Item type="evenMain" />
                <Item type="botMain" iconName="Settings" title={profileSettingsTitle} pressHandle={() => goTo('Settings')} />
            </Block>

            <Block mt={'15px'}>
                <Item iconName="Statistics" title={profileStatisticsTitle} pressHandle={() => goTo('Statistics')} />
                <Item
                    type="evenMain"
                    iconName="Subscriptions"
                    title={profileSubscriptionsTitle}
                    pressHandle={() => goTo('Subscriptions')}
                />
                <Item type="botMain" iconName="Question" title={profileQuestionTitle} pressHandle={() => goTo('Question')} />
            </Block>
        </Wrapper>
    );
};

export default Buttons;

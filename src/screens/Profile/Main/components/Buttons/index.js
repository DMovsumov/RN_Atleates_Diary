import React from 'react';
import { Block, ButtonPress, ButtonView, Wrapper, TextButton, ButtonInfoBlock } from './styled.index';
import ItemIcons from '../../../../../components/ItemIcon';
import useButtons from './hooks/useButtons';
import ArrowBack from '../../../../../assets/arrowBack';

const Item = ({ type, iconName, title, pressHandle }) => {
    return (
        <ButtonPress onPress={pressHandle} type={type} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
            <ButtonView>
                <ButtonInfoBlock>
                    <ItemIcons iconName={iconName} />
                    <TextButton>{title}</TextButton>
                </ButtonInfoBlock>
                <ArrowBack height={24} right />
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

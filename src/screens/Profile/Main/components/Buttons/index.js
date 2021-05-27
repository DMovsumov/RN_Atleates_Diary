import React from 'react';
import { Block, ButtonPress, ButtonView, Wrapper, TextButton, ButtonInfoBlock } from './styled.index';
import ItemIcons from '../../../../../components/ItemIcon';
import useButtons from './hooks/useButtons';
import ArrowBack from '../../../../../assets/arrowBack';

const Item = ({ type, iconName, title }) => {
    return (
        <ButtonPress type={type} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
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

const Buttons = () => {
    const {
        texts: { profileMyaccountTitle, profileSettingsTitle, profileStatisticsTitle, profileSubscriptionsTitle, profileQuestionTitle },
    } = useButtons();

    return (
        <Wrapper>
            <Block>
                <Item iconName="MyAccount" title={profileMyaccountTitle} />
                <Item type="evenMain" />
                <Item type="botMain" iconName="Settings" title={profileSettingsTitle} />
            </Block>

            <Block mt={'15px'}>
                <Item iconName="Statistics" title={profileStatisticsTitle} />
                <Item type="evenMain" iconName="Subscriptions" title={profileSubscriptionsTitle} />
                <Item type="botMain" iconName="Question" title={profileQuestionTitle} />
            </Block>
        </Wrapper>
    );
};

export default Buttons;

import React from 'react';
import { Header, SaveArea, TextScreen, WrapArrow } from './styled.index';
import { ScrollView } from 'react-native';
import Arrow from '../../assets/arrow';

const MainLayout = ({ children, navigation, back, title }) => {
    const goBack = () => navigation.goBack();

    return (
        <SaveArea>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {back && (
                    <Header>
                        <WrapArrow onPress={goBack}>
                            <Arrow />
                        </WrapArrow>
                        <TextScreen back={back}>{title}</TextScreen>
                    </Header>
                )}
                {children}
            </ScrollView>
        </SaveArea>
    );
};

export default MainLayout;

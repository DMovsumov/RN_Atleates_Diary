import React, { useState } from 'react';
import { Header, SaveArea, TextScreen, WrapArrow } from './styled.index';
import { ScrollView, RefreshControl } from 'react-native';
import Arrow from '../../assets/arrow';

const MainLayout = ({ children, navigation, back, title, refresh }) => {
    const goBack = () => navigation.goBack();
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        await setRefreshing(true);
        await refresh();
        await setRefreshing(false);
    };

    return (
        <SaveArea>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                refreshControl={
                    <RefreshControl
                        enabled={refresh ? true : false}
                        refreshing={refreshing}
                        progressBackgroundColor="#fff"
                        tintColor="#fff"
                        onRefresh={onRefresh}
                    />
                }>
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

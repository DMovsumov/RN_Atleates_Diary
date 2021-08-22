import React, { useState } from 'react';
import { Header, SaveArea, TextScreen, WrapArrow, RootWrapper } from './styled.index';
import { ScrollView, RefreshControl } from 'react-native';
import Arrow from '../../assets/arrow';
import { useSelector } from 'react-redux';

const MainLayout = ({ children, navigation, back, title, backHandle, refresh }) => {
    const goBack = () => (backHandle ? backHandle() : navigation.goBack());
    const [refreshing, setRefreshing] = useState(false);
    const { theme } = useSelector(({ global }) => global);

    const onRefresh = async () => {
        await setRefreshing(true);
        await refresh();
        await setRefreshing(false);
    };

    return (
        <SaveArea theme={theme}>
            {back && (
                <Header>
                    <WrapArrow onPress={goBack}>
                        <Arrow color={theme === 'dark' ? '#fefefe' : '#1A1B1E'} />
                    </WrapArrow>
                    <TextScreen theme={theme}>{title}</TextScreen>
                </Header>
            )}
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
                <RootWrapper>{children}</RootWrapper>
            </ScrollView>
        </SaveArea>
    );
};

export default MainLayout;

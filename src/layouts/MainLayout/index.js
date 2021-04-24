import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';

const MainLayout = ({ children }) => {
    return <SafeAreaView>{children}</SafeAreaView>;
};

export default MainLayout;

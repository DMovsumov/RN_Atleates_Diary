import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';

const AuthLayout = ({ children }) => {
    return <SafeAreaView>{children}</SafeAreaView>;
};

export default AuthLayout;

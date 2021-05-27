import React from 'react';
import { ScrollView } from 'react-native';
import SaveArea from './styled.index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AuthLayout = ({ children, top, bottom }) => {
    const insets = useSafeAreaInsets();
    const styles = { paddingTop: top ? insets.top : 0, paddingBottom: bottom ? insets.bottom : 0 };

    return (
        <SaveArea style={styles}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>{children}</ScrollView>
        </SaveArea>
    );
};

AuthLayout.defaultProps = {
    top: true,
    bottom: true,
};

export default AuthLayout;

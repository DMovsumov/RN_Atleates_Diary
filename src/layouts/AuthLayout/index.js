import React from 'react';
import { ScrollView } from 'react-native';
import SaveArea from './styled.index';

const AuthLayout = ({ children }) => {
    return (
        <SaveArea>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {children}
            </ScrollView>
        </SaveArea>
    );
};

export default AuthLayout;

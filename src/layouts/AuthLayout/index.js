import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { ScrollView, StyleSheet } from 'react-native';

const AuthLayout = ({ children }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};

export default AuthLayout;

const styles = StyleSheet.create({
    safeArea: {
        width: '100%',
        height: '100%',
        backgroundColor: '#171824',
    }
});

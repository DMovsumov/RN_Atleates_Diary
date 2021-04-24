import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Home from '../../screens/Home';

const Tabs = createBottomTabNavigator();

const Tab = () => {
    return (
        <SafeAreaProvider>
            <Tabs.Navigator>
                <Tabs.Screen name={'Home'} component={Home} />
            </Tabs.Navigator>
        </SafeAreaProvider>
    );
};

export default Tab;

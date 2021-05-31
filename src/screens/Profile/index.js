import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Main';
import MyAccount from './MyAccount';

const Tab = createBottomTabNavigator();

const Profile = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={'Main'} component={Main} options={{ tabBarVisible: false }} />
            <Tab.Screen name={'MyAccount'} component={MyAccount} options={{ tabBarVisible: false }} />
        </Tab.Navigator>
    );
};

export default Profile;

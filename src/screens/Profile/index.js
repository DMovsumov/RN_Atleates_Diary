import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Main';

const Tab = createBottomTabNavigator();

const Profile = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={'MainProfile'} component={Main} options={{ tabBarVisible: false }} />
        </Tab.Navigator>
    );
};

export default Profile;

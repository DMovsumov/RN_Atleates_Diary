import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Main';
import CreateOrEditProgram from './CreateOrEditProgram';

const Tab = createBottomTabNavigator();

const Create = () => (
    <Tab.Navigator>
        <Tab.Screen name={'Main'} component={Main} options={{ tabBarVisible: false }} />
        <Tab.Screen name={'CreateProgram'} component={CreateOrEditProgram} options={{ tabBarVisible: false }} />
    </Tab.Navigator>
);

export default Create;

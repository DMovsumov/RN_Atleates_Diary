import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../screens/Home';
import IconName from './components/IconName';
import Programs from '../../../screens/Programs';
import Create from '../../../screens/Create';
import Recommendation from '../../../screens/Recommendation';
import Profile from '../../../screens/Profile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const styles = { style: { backgroundColor: '#222332' } };

    return (
        <SafeAreaProvider>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => <IconName name={route.name} focused={focused} color={color} size={size} />,
                })}
                tabBarOptions={{
                    activeTintColor: '#6A40F3',
                    inactiveTintColor: '#C4C4C4',
                    ...styles,
                }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Programs" component={Programs} />
                <Tab.Screen name="Create" component={Create} />
                <Tab.Screen name="Recommendation" component={Recommendation} options={{ title: 'Timeline' }} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </SafeAreaProvider>
    );
};

export default TabNavigator;

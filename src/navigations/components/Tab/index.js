import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../screens/Home';
import IconName from './components/IconName';
import Programs from '../../../screens/Programs';
import Recommendation from '../../../screens/Recommendation';
import Profile from '../../../screens/Profile';
import { useSelector } from 'react-redux';
import Create from '../../../screens/Create';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const { theme } = useSelector(({ global }) => global);
    const styles = { style: { backgroundColor: theme === 'dark' ? '#222332' : '#fefefe' } };

    return (
        <SafeAreaProvider>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => <IconName name={route.name} focused={focused} color={color} size={size} />,
                })}
                tabBarOptions={{
                    activeTintColor: '#6A40F3',
                    inactiveTintColor: theme === 'dark' ? '#C4C4C4' : '#1A1B1E',
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

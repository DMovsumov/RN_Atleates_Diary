import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Tab from '../Tab';
import Login from '../../screens/Login';
import Register from '../../screens/Register';

const Stack = createStackNavigator();

const Main = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    {/*<Stack.Screen name={'Tab'} component={Tab} />*/}
                    {/*<Stack.Screen*/}
                    {/*    name={'Login'}*/}
                    {/*    component={Login}*/}
                    {/*    options={{ headerShown: false }}*/}
                    {/*/>*/}
                    <Stack.Screen
                        name={'Register'}
                        component={Register}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default Main;

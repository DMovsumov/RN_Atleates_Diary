import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from '../../screens/Login';
import Registration from '../../screens/Registration';
import ForgotPassword from '../../screens/ForgotPassword';

const Stack = createStackNavigator();

const Main = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    {/*<Stack.Screen name={'Tab'} component={Tab} />*/}
                    <Stack.Screen name={'Login'} component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name={'Registration'} component={Registration} options={{ headerShown: false }} />
                    <Stack.Screen name={'Forgot Password'} component={ForgotPassword} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default Main;

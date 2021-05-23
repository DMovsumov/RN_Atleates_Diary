import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import ForgotPassword from '../screens/ForgotPassword';
import useMainNav from './hooks/useMainNav';
import LoadingScreen from '../screens/LoadingScreen';
import TabNavigator from './components/Tab';

const Stack = createStackNavigator();

const Main = () => {
    const { initializing, user } = useMainNav();

    const render = () => {
        if (initializing) {
            return (
                <>
                    <Stack.Screen name={'Loading'} component={LoadingScreen} options={{ headerShown: false }} />
                </>
            );
        }

        if (initializing && !user) {
            return (
                <>
                    <Stack.Screen name={'Login'} component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name={'Registration'} component={Registration} options={{ headerShown: false }} />
                    <Stack.Screen name={'Forgot Password'} component={ForgotPassword} options={{ headerShown: false }} />
                </>
            );
        }

        return (
            <>
                <Stack.Screen name={'TabNavigator'} component={TabNavigator} options={{ headerShown: false }} />
            </>
        );
    };

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    {render()}
                    {/*<Stack.Screen name={'Tab'} component={Tab} />*/}
                    {/*<Stack.Screen name={'Login'} component={Login} options={{ headerShown: false }} />*/}
                    {/*<Stack.Screen name={'Registration'} component={Registration} options={{ headerShown: false }} />*/}
                    {/*<Stack.Screen name={'Forgot Password'} component={ForgotPassword} options={{ headerShown: false }} />*/}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default Main;

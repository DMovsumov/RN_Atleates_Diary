/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { useColorScheme } from 'react-native';
import Main from './src/navigations';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
};

export default App;

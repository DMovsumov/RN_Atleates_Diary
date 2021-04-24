import 'react-native-gesture-handler';
import React from 'react';
import type { Node } from 'react';
import { useColorScheme } from 'react-native';
import Main from './src/navigations/Main';
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

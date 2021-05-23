import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';

const useMainNav = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const onAuthStateChanged = user => {
        setUser(user);
        if (initializing) {
            setInitializing(false);
        }
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    return {
        initializing,
        user,
    };
};

export default useMainNav;

import { useState, useEffect, useCallback } from 'react';
import auth from '@react-native-firebase/auth';

const useMain = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    const onAuthStateChanged = useCallback(
        user => {
            setUser(user);
            if (initializing) {
                setInitializing(false);
            }
        },
        [initializing],
    );

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, [onAuthStateChanged]);

    if (initializing) {
        return null;
    }

    return {
        user,
    };
};

export default useMain;

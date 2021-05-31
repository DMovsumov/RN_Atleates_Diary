import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProfile } from '../../redux/actions/profile';

const useMainNav = () => {
    const dispatch = useDispatch();
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const onAuthStateChanged = async user => {
        setUser(user);
        if (user?.uid) {
            await dispatch(getProfile(user.uid));
        }
        return setInitializing(false);
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

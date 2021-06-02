import auth from '@react-native-firebase/auth';
import { useSelector } from 'react-redux';

const useMainProfile = navigation => {
    const { theme } = useSelector(({ global }) => global);

    const goTo = name => {
        return navigation.navigate(name);
    };

    const logOut = async () => {
        await auth().signOut();
    };

    return {
        goTo,
        logOut,
        theme,
    };
};

export default useMainProfile;

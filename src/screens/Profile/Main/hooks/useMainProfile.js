import auth from '@react-native-firebase/auth';

const useMainProfile = navigation => {
    const goTo = name => {
        return navigation.navigate(name);
    };

    const logOut = async () => {
        await auth().signOut();
    };

    return {
        goTo,
        logOut,
    };
};

export default useMainProfile;

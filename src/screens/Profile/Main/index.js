import React from 'react';
import AuthLayout from '../../../layouts/AuthLayout';
import { StyleSheet } from 'react-native';
import { Wrapper, ProfileImage, ProfileName } from './styled.index';
import Buttons from './components/Buttons';
import useMainProfile from './hooks/useMainProfile';
import LogoutBtn from './components/Logout';

const Main = ({ navigation }) => {
    const { goTo, logOut } = useMainProfile(navigation);

    return (
        <AuthLayout top={false} bottom={false}>
            <Wrapper>
                <ProfileImage
                    source={{ uri: 'https://sun1-22.userapi.com/ooi6yEvzBT9lFw9B__3kyNefG8cpt_fjouhH6Q/5bfRUiO4VMc.jpg' }}
                    imageStyle={styles.image}>
                    <LogoutBtn logOut={logOut} />
                    <ProfileName>Denioo</ProfileName>
                </ProfileImage>
                <Buttons goTo={goTo} />
            </Wrapper>
        </AuthLayout>
    );
};

export default Main;

const styles = StyleSheet.create({
    image: {
        borderBottomLeftRadius: 50,
        opacity: 0.75,
    },
});

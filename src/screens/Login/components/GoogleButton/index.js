import React from 'react';
import { Wrapper, Texts, GoogleBtn } from './styled.index';
import Google from '../../../../assets/Google';
import useGoogleButton from './hooks/useGoogleButton';

const GoogleButton = () => {
    const { googlePressHandle } = useGoogleButton();

    return (
        <Wrapper onPress={googlePressHandle}>
            <GoogleBtn>
                <Google />
            </GoogleBtn>
            <Texts>Sign in with Google</Texts>
        </Wrapper>
    );
};

export default GoogleButton;

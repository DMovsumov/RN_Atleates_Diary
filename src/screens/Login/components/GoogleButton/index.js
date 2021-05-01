import React from 'react';
import { Wrapper, Texts, GoogleBtn } from './styled.index';
import Google from '../../../../assets/Google';

const GoogleButton = () => {
    return (
        <Wrapper>
            <GoogleBtn>
                <Google />
            </GoogleBtn>
            <Texts>Sign in with Google</Texts>
        </Wrapper>
    );
};

export default GoogleButton;

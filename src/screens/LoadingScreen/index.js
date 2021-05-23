import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import Logo from '../../assets/logo';
import { Wrapper, Message } from './styled.index';

const LoadingScreen = () => {
    return (
        <AuthLayout>
            <Wrapper>
                <Logo />
                <Message>#Training every day</Message>
            </Wrapper>
        </AuthLayout>
    );
};

export default LoadingScreen;

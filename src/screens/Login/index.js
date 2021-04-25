import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Container, Wrapper } from './styled.index';
import Input from '../../components/Inputs';

const Login = () => {
    return (
        <AuthLayout>
            <Container>
                <Wrapper>
                    <Input label="Email" style={{ marginBottom: 15 }} />
                    <Input label="Password:" isSecure />
                </Wrapper>
            </Container>
        </AuthLayout>
    );
};

export default Login;

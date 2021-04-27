import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Container, Wrapper } from './styled.index';
import Input from '../../components/Inputs';
import Touches from '../../components/Toches';
import useLogin from './hooks/useLogin';

const Login = () => {
    const { texts } = useLogin();
    const { loginEmail } = texts;

    return (
        <AuthLayout>
            <Container>
                <Wrapper>
                    <Input label={loginEmail} style={{ marginBottom: 15 }} />
                    <Input label="Password:" isSecure />
                    <Touches title={'Forgot password'} />
                </Wrapper>
            </Container>
        </AuthLayout>
    );
};

export default Login;

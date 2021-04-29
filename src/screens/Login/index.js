import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Container } from './styled.index';
import Input from '../../components/Inputs';
import Touches from '../../components/Toches';
import useLogin from './hooks/useLogin';
import Button from '../../components/Button';

const Login = () => {
    const { texts } = useLogin();
    const { loginEmail, loginPassword, loginForgotPassword, allSignIn } = texts;

    return (
        <AuthLayout>
            <Container>
                <Input label={loginEmail} style={{ marginBottom: 15 }} />
                <Input
                    label={loginPassword}
                    isSecure
                    style={{ marginBottom: 15 }}
                />
                <Touches title={loginForgotPassword} />
                <Button title={allSignIn} />
            </Container>
        </AuthLayout>
    );
};

export default Login;

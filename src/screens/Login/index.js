import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Container, TextsBlock, Texts, TouchSignUp } from './styled.index';
import Input from '../../components/Inputs';
import Touches from '../../components/Toches';
import useLogin from './hooks/useLogin';
import Button from '../../components/Button';
import GoogleButton from './components/GoogleButton';

const Login = ({ navigation }) => {
    const { texts, goRegister } = useLogin(navigation);
    const {
        loginEmail,
        loginPassword,
        loginForgotPassword,
        allSignIn,
        loginRegisterTitle,
        allSignUp,
    } = texts;

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
                <GoogleButton />
                <TextsBlock>
                    <Texts>{loginRegisterTitle}</Texts>
                    <TouchSignUp title={allSignUp} onPress={goRegister} />
                </TextsBlock>
            </Container>
        </AuthLayout>
    );
};

export default Login;

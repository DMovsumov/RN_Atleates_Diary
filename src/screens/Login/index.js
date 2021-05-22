import React from 'react';
import { Container, TextsBlock, Texts, TouchSignUp } from './styled.index';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../components/Input';
import useLogin from './hooks/useLogin';
import Touches from '../../components/Touches';
import Button from '../../components/Button';

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
                <TextsBlock>
                    <Texts>{loginRegisterTitle}</Texts>
                    <TouchSignUp title={allSignUp} onPress={goRegister} />
                </TextsBlock>
            </Container>
        </AuthLayout>
    );
};

export default Login;

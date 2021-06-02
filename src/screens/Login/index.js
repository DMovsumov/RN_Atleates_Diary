import React from 'react';
import { Container, TextsBlock, TextsInfo, TouchSignUp, ErrorText } from './styled.index';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../components/Input';
import useLogin from './hooks/useLogin';
import Touches from '../../components/Touches';
import Button from '../../components/Button';
import { REGEXP_EMAIL_LOGIN, REGEXP_PASSWORD } from '../../configs/global';

const Login = ({ navigation }) => {
    const { texts, control, errors, handleSubmit, onSubmit, enabled, loading, goRegister, goForgotPassword } = useLogin(navigation);
    const {
        loginEmail,
        loginPassword,
        loginForgotPassword,
        allSignIn,
        loginRegisterTitle,
        allSignUp,
        authErrorInvalidEmail,
        authErrorWeakPassword,
    } = texts;

    return (
        <AuthLayout>
            <Container>
                <Input
                    name="email"
                    label={errors.email?.message || loginEmail}
                    control={control}
                    style={{ marginBottom: 15 }}
                    rules={{
                        required: true,
                        pattern: {
                            value: REGEXP_EMAIL_LOGIN,
                            message: authErrorInvalidEmail,
                        },
                    }}
                    error={errors.email?.message || errors.errors?.message}
                />
                <Input
                    name="password"
                    label={errors.password?.message || loginPassword}
                    control={control}
                    style={{ marginBottom: 15 }}
                    rules={{
                        required: true,
                        pattern: {
                            value: REGEXP_PASSWORD,
                            message: '',
                        },
                        minLength: {
                            value: 8,
                            message: authErrorWeakPassword,
                        },
                    }}
                    error={errors.password?.message || errors.errors?.message}
                    isSecure
                />
                {errors.errors?.message && <ErrorText>{errors.errors.message}</ErrorText>}
                <Touches title={loginForgotPassword} style={{ fontSize: 18 }} onPress={goForgotPassword} />
                <Button title={allSignIn} disabled={!enabled} onPress={handleSubmit(onSubmit)} loading={loading} />
                <TextsBlock>
                    <TextsInfo text={loginRegisterTitle} />
                    <TouchSignUp title={allSignUp} onPress={goRegister} />
                </TextsBlock>
            </Container>
        </AuthLayout>
    );
};

export default Login;

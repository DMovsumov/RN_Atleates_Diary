import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../components/Input';
import { Container, Desc } from './styled.index';
import useForgotPassword from './hooks/useForgotPassword';
import { REGEXP_EMAIL_LOGIN } from '../../configs/global';
import Button from '../../components/Button';
import Touches from '../../components/Touches';
import FinishMessage from '../../components/FinishMessage';

const ForgotPassword = ({ navigation }) => {
    const { errors, handleSubmit, control, texts, enabled, loading, finish, email, goBack, onSubmit } = useForgotPassword(navigation);
    const { loginEmail, authErrorInvalidEmail, authResetPasswordDesc, allSignUpBack, authResetPasswordFinishmessage } = texts;

    return (
        <AuthLayout>
            <Container>
                {finish ? (
                    <FinishMessage text={authResetPasswordFinishmessage} extra={email} />
                ) : (
                    <>
                        <Desc>{authResetPasswordDesc}</Desc>
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
                        <Touches title={allSignUpBack} onPress={goBack} style={{ fontSize: 18 }} />
                        <Button title="Send" onPress={handleSubmit(onSubmit)} disabled={!enabled} loading={loading} />
                    </>
                )}
            </Container>
        </AuthLayout>
    );
};

export default ForgotPassword;

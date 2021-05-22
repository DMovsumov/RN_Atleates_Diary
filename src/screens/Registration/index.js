import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import useRegistration from './hooks/useRegistration';
import { Container } from './styled.index';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Touches from '../../components/Touches';
import { REGEXP_EMAIL_LOGIN, REGEXP_PASSWORD } from '../../configs/global';

const Registration = ({ navigation }) => {
    const { texts, control, handleSubmit, errors, enabled, goBack, onSubmit } = useRegistration(navigation);

    const {
        allSignUp,
        loginEmail,
        loginPassword,
        allSignUpName,
        allSignUpBack,
        authRegisterNameErrorMinlenght,
        authRegisterNameErrorMaxlenght,
        authErrorInvalidEmail,
        authErrorWeakPassword,
    } = texts;

    return (
        <AuthLayout>
            <Container>
                <Input
                    name="name"
                    label={errors.name?.message || allSignUpName}
                    control={control}
                    rules={{
                        required: true,
                        minLength: {
                            value: 2,
                            message: authRegisterNameErrorMinlenght,
                        },
                        maxLength: {
                            value: 32,
                            message: authRegisterNameErrorMaxlenght,
                        },
                    }}
                    style={{ marginBottom: 15 }}
                    error={errors.name?.message}
                />
                <Input
                    name="email"
                    label={errors.email?.message || loginEmail}
                    control={control}
                    rules={{
                        required: true,
                        pattern: {
                            value: REGEXP_EMAIL_LOGIN,
                            message: authErrorInvalidEmail,
                        },
                    }}
                    style={{ marginBottom: 15 }}
                    error={errors.email?.message}
                />
                <Input
                    name="password"
                    label={errors.password?.message || loginPassword}
                    control={control}
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
                    style={{ marginBottom: 15 }}
                    error={errors.password?.message}
                    isSecure
                />
                <Touches title={allSignUpBack} onPress={goBack} />
                <Button title={allSignUp} disabled={!enabled} onPress={handleSubmit(onSubmit)} />
            </Container>
        </AuthLayout>
    );
};

export default Registration;

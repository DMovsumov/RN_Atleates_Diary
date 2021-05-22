import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import useRegistration from './hooks/useRegistration';
import { Container, ErrorText } from './styled.index';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Touches from '../../components/Touches';

const Registration = ({ navigation }) => {
    const {
        texts,
        errorMessage,
        handleChangeEmail,
        handleChangePass,
        handleChangeName,
        goBack,
        onSubmit,
    } = useRegistration(navigation);

    const {
        allSignUp,
        loginEmail,
        loginPassword,
        allSignUpName,
        allSignUpBack,
    } = texts;

    return (
        <AuthLayout>
            <Container>
                <Input
                    label={allSignUpName}
                    style={{ marginBottom: 15 }}
                    changeText={handleChangeName}
                />
                <Input
                    label={loginEmail}
                    style={{ marginBottom: 15 }}
                    changeText={handleChangeEmail}
                    error={errorMessage && errorMessage.type === 'email'}
                />
                <Input
                    label={loginPassword}
                    isSecure
                    style={{ marginBottom: 15 }}
                    changeText={handleChangePass}
                    error={errorMessage && errorMessage.type === 'password'}
                />
                {errorMessage && <ErrorText>{errorMessage.texts}</ErrorText>}
                <Touches title={allSignUpBack} onPress={goBack} />
                <Button title={allSignUp} onPress={onSubmit} />
            </Container>
        </AuthLayout>
    );
};

export default Registration;

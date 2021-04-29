import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import useRegister from './hooks/useRegister';
import { Container } from './styled.index';
import Input from '../../components/Inputs';
import Button from '../../components/Button';

const Register = () => {
    const {
        texts,
        handleChangeEmail,
        handleChangePass,
        handleChangeName,
        onSubmit,
    } = useRegister();
    const { allSignUp, loginEmail, loginPassword, allSignUpName } = texts;

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
                />
                <Input
                    label={loginPassword}
                    isSecure
                    style={{ marginBottom: 15 }}
                    changeText={handleChangePass}
                />
                <Button title={allSignUp} onPress={onSubmit} />
            </Container>
        </AuthLayout>
    );
};

export default Register;

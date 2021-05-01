import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import useRegister from './hooks/useRegister';
import { Container } from './styled.index';
import Input from '../../components/Inputs';
import Button from '../../components/Button';
import Touches from '../../components/Toches';

const Register = ({ navigation }) => {
    const {
        texts,
        handleChangeEmail,
        handleChangePass,
        handleChangeName,
        goBack,
        onSubmit,
    } = useRegister(navigation);
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
                />
                <Input
                    label={loginPassword}
                    isSecure
                    style={{ marginBottom: 15 }}
                    changeText={handleChangePass}
                />
                <Touches title={allSignUpBack} onPress={goBack} />
                <Button title={allSignUp} onPress={onSubmit} />
            </Container>
        </AuthLayout>
    );
};

export default Register;

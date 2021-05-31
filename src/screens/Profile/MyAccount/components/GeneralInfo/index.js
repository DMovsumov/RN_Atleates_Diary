import React from 'react';
import { Header, Texts, Wrapper, MainBlock } from './styled.index';
import Input from '../../../../../components/Input';
import useGeneralInfo from './hooks/useGeneralInfo';

const GeneralInfo = ({ control, errors, profile }) => {
    const {
        texts: {
            allSignUpName,
            profileMyaccountTitleGeneral,
            authRegisterNameErrorMinlenght,
            authRegisterNameErrorMaxlenght,
            profileMyaccountTitleFirstname,
            profileMyaccountTitleLastname,
        },
    } = useGeneralInfo();
    const { displayName, firstName, lastName } = profile;

    return (
        <Wrapper>
            <Header>
                <Texts>{profileMyaccountTitleGeneral}</Texts>
            </Header>
            <MainBlock>
                <Input
                    name="userName"
                    label={errors.userName?.message || allSignUpName}
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
                    error={errors.userName?.message}
                    defaultValue={displayName}
                />
                <Input
                    name="firstName"
                    label={errors.firstName?.message || profileMyaccountTitleFirstname}
                    control={control}
                    rules={{
                        required: false,
                        minLength: {
                            value: 2,
                            message: authRegisterNameErrorMinlenght,
                        },
                        maxLength: {
                            value: 32,
                            message: authRegisterNameErrorMaxlenght,
                        },
                    }}
                    error={errors.firstName?.message}
                    style={{ marginTop: 20 }}
                    defaultValue={firstName}
                />
                <Input
                    name="lastName"
                    label={errors.lastName?.message || profileMyaccountTitleLastname}
                    control={control}
                    rules={{
                        required: false,
                        minLength: {
                            value: 2,
                            message: authRegisterNameErrorMinlenght,
                        },
                        maxLength: {
                            value: 32,
                            message: authRegisterNameErrorMaxlenght,
                        },
                    }}
                    error={errors.lastName?.message}
                    style={{ marginTop: 20 }}
                    defaultValue={lastName}
                />
            </MainBlock>
        </Wrapper>
    );
};

export default GeneralInfo;

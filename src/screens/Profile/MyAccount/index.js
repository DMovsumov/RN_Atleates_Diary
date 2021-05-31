import React from 'react';
import MainLayout from '../../../layouts/MainLayout';
import ProfileImage from './components/ProfileImage';
import useMyAccount from './hooks/useMyAccount';
import GeneralInfo from './components/GeneralInfo';
import Units from './components/Units';
import Button from '../../../components/Button';
import { ButtonWrap } from './styled.index';

const MyAccount = ({ navigation }) => {
    const {
        profile,
        texts: { allSubmitBtnTitle },
        control,
        errors,
        units,
        enabled,
        loading,
        onSubmit,
        refreshProfile,
        handleSetUnits,
    } = useMyAccount();
    const { displayName, firstName, lastName } = profile;

    return (
        <MainLayout navigation={navigation} back title="My Account" refresh={refreshProfile}>
            <ProfileImage />
            <GeneralInfo control={control} errors={errors} profile={{ displayName, firstName, lastName }} />
            <Units units={units} onPress={handleSetUnits} />
            <ButtonWrap>
                <Button title={allSubmitBtnTitle} disabled={!enabled} loading={loading} onPress={onSubmit} />
            </ButtonWrap>
        </MainLayout>
    );
};

export default MyAccount;

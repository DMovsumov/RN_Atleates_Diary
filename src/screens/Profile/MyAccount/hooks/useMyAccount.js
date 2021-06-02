import { useDispatch, useSelector } from 'react-redux';
import useTranslates from '../../../../i18n/useTranslates';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { getProfile, setLoading, setProfile } from '../../../../redux/actions/profile';
import auth from '@react-native-firebase/auth';

const useMyAccount = () => {
    const dispatch = useDispatch();
    const profile = useSelector(({ profile }) => profile);
    const [units, setUnits] = useState({ ...profile.units, editable: false });
    const { loading } = profile;

    const texts = useTranslates('all.submit.btn.title', 'profile.myAccount.title');
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const fields = ['userName', 'firstName', 'lastName'];
    const [userName, firstName, lastName] = watch(fields);
    const [enabled, setEnable] = useState(false);

    const refreshProfile = async () => {
        const { uid } = auth().currentUser;
        await dispatch(getProfile(uid));
    };

    const handleSetUnits = units => {
        setUnits(prevState => ({ ...prevState, ...units }));
    };

    const onSubmit = async () => {
        await dispatch(setLoading(true));

        await dispatch(
            setProfile(profile.uid, {
                displayName: userName || profile.displayName,
                firstName: firstName || profile.firstName,
                lastName: lastName || profile.lastName,
                units: {
                    weight: units.weight,
                    height: units.height,
                },
            }),
        );
    };

    useEffect(() => {
        if (userName || units.editable || firstName || lastName) {
            setEnable(true);
        }
    }, [firstName, lastName, units, userName]);

    return {
        profile,
        texts,
        handleSubmit,
        control,
        errors,
        units,
        enabled,
        loading,
        onSubmit,
        refreshProfile,
        handleSetUnits,
    };
};

export default useMyAccount;

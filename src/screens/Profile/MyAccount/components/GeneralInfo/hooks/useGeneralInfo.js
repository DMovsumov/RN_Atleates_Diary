import useTranslates from '../../../../../../i18n/useTranslates';

const useGeneralInfo = () => {
    const texts = useTranslates(
        'all.sign.up.name',
        'profile.myAccount.title.general',
        'auth.register.name.error.minlenght',
        'auth.register.name.error.maxlenght',
        'profile.myAccount.title.firstName',
        'profile.myAccount.title.lastName',
    );

    return {
        texts,
    };
};

export default useGeneralInfo;

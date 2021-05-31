import useTranslates from '../../../../../../i18n/useTranslates';

const useUnits = () => {
    const texts = useTranslates(
        'profile.myAccount.title.units',
        'all.units.kg',
        'all.units.lbs',
        'all.units.cm',
        'all.units.ft',
        'all.units.weight',
        'all.units.height',
    );

    return {
        texts,
    };
};

export default useUnits;

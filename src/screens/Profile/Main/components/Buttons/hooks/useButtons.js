import useTranslates from '../../../../../../i18n/useTranslates';

const useButtons = () => {
    const texts = useTranslates(
        'profile.myAccount.title',
        'profile.settings.title',
        'profile.statistics.title',
        'profile.subscriptions.title',
        'profile.question.title',
    );

    return {
        texts,
    };
};

export default useButtons;

import { useSelector } from 'react-redux';
import useTranslates from '../../../../../i18n/useTranslates';

const useWelcome = () => {
    const { displayName, uid, firstName, lastName } = useSelector(({ profile }) => profile);
    const texts = useTranslates('home.welcome.title', 'home.welcome.subTitle');

    return {
        title: `${lastName} ${firstName}` || displayName,
        texts,
    };
};

export default useWelcome;

import { vocabulary } from './vocabulary';
import { useSelector } from 'react-redux';

const useTranslates = (...ids) => {
    const { lang } = useSelector(({ global }) => global);

    const en = 'en';
    const camelCase = input =>
        input
            .toLowerCase()
            .replace(/\.(.)/g, (match, group1) => group1.toUpperCase())
            .replace(/-(.)/g, (match, group1) => group1.toUpperCase());

    return ids.reduce((acc, id) => {
        acc[camelCase(id)] = vocabulary[id][lang]; //TODO: брать из стора язык
        return acc;
    }, {});
};

export default useTranslates;

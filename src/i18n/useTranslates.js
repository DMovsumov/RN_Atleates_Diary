import { vocabulary } from './vocabulary';

const useTranslates = (...ids) => {
    const en = 'en';
    const camelCase = input =>
        input
            .toLowerCase()
            .replace(/\.(.)/g, (match, group1) => group1.toUpperCase())
            .replace(/-(.)/g, (match, group1) => group1.toUpperCase());

    return ids.reduce((acc, id) => {
        acc[camelCase(id)] = vocabulary[id]['en'];
        return acc;
    }, {});
};

export default useTranslates;

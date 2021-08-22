import { useSelector } from 'react-redux';

const useExerciseScreenComponents = () => {
    const { lang } = useSelector(({ global }) => global);

    return {
        lang,
    };
};

export default useExerciseScreenComponents;

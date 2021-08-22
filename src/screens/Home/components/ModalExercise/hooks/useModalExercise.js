import { useSelector } from 'react-redux';

const useModalExercise = () => {
    const { timer } = useSelector(({ home }) => home);

    return {
        time: timer,
    };
};

export default useModalExercise;

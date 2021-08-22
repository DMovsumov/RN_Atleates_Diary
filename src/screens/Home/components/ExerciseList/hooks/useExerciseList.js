import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { getExercisesProgram } from '../../../../../redux/actions/home';

const useExerciseList = () => {
    const dispatch = useDispatch();
    const {
        program: { id, author, img },
        exerciseList,
    } = useSelector(({ home }) => home);

    useEffect(() => {
        dispatch(getExercisesProgram(id));
    }, [dispatch, id]);

    const exercises = useMemo(() => {

    }, [])

    return {
        exerciseList,
    };
};

export default useExerciseList;

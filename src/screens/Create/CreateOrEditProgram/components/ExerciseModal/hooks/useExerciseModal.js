import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExercisesProgram, getFiltersExercise } from '../../../../../../redux/actions/exercises';
import { addExercise } from '../../../../../../redux/actions/writeProgram';

const useExerciseModal = () => {
    const [exerciseType, setExerciseType] = useState('');
    const [muscleGroup, setMuscleGroup] = useState('');
    const [select, setSelect] = useState({});
    const [showNumbers, setShowNumbers] = useState(false);
    const dispatch = useDispatch();

    const { exerciseList } = useSelector(({ exercises }) => exercises);

    useEffect(() => {
        if (exerciseType || muscleGroup) {
            dispatch(getFiltersExercise(exerciseType, muscleGroup));
        }
    }, [exerciseType, muscleGroup]);

    const handleSetSelect = exercise => {
        setSelect(exercise);
        setShowNumbers(true);
    };

    const handleSubmitExercise = async data => {
        await dispatch(addExercise({ ...select, ...data }));
        await setShowNumbers(false);
    };

    return {
        exerciseType,
        muscleGroup,
        setExerciseType,
        setMuscleGroup,
        exerciseList,
        select,
        showNumbers,
        setShowNumbers,
        handleSetSelect,
        handleSubmitExercise,
    };
};

export default useExerciseModal;

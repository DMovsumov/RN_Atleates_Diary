import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiltersExercise } from '../../../../../../redux/actions/exercises';

const useExerciseModal = () => {
    const [exerciseType, setExerciseType] = useState('');
    const [muscleGroup, setMuscleGroup] = useState('');
    const [select, setSelect] = useState(null);
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

    const handleSubmitExercise = data => {
        setSelect(prevState => ({ ...prevState, ...data }));
        setShowNumbers(false);
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

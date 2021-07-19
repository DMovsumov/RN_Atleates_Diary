import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getExercisesProgram } from '../../../../../../redux/actions/exercises';
import { deleteExercise } from '../../../../../../redux/actions/writeProgram';

const useExerciseList = () => {
    const dispatch = useDispatch();
    const { exercises, activeDay, activeWeek } = useSelector(({ writeProgram }) => writeProgram);
    const { exerciseListProgram } = useSelector(({ exercises }) => exercises);

    useEffect(() => {
        const exerciseFilterList = exercises.filter(item => item.week === activeWeek && item.day === activeDay);

        dispatch(getExercisesProgram(exerciseFilterList));
    }, [activeDay, activeWeek, dispatch, exercises]);

    const handleDeleteExercise = docTitle => {
        dispatch(deleteExercise(exercises, docTitle));
    };

    return {
        exerciseListProgram,
        handleDeleteExercise,
    };
};

export default useExerciseList;

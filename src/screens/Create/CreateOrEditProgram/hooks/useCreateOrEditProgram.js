import { useDispatch, useSelector } from 'react-redux';
import useTranslates from '../../../../i18n/useTranslates';
import {
    deleteExercise,
    setActiveDay,
    setActiveWeek,
    setProgramsDifficult,
    setProgramsGender,
    updateExercisesWeek,
} from '../../../../redux/actions/writeProgram';
import { useEffect, useState } from 'react';
import { getExercisesProgram } from '../../../../redux/actions/exercises';
import useValidationProgram from '../../../../hooks/useValidationProgram';
import { setMessage } from '../../../../redux/actions/global';

const useCreateOrEditProgram = () => {
    const dispatch = useDispatch();
    const { writeprogramErrorFields } = useTranslates('writeProgram.error.fields');
    const writeProgram = useSelector(({ writeProgram }) => writeProgram);
    const { exerciseListProgram } = useSelector(({ exercises }) => exercises);
    const [modal, setModal] = useState(false);
    const { difficult, gender, exercises, img, activeDay, activeWeek } = writeProgram;
    const { validation } = useValidationProgram();

    useEffect(() => {
        const exerciseFilterList = exercises.filter(item => item.week === activeWeek && item.day === activeDay);

        dispatch(getExercisesProgram(exerciseFilterList));
    }, [activeDay, activeWeek, dispatch, exercises]);

    const maxWeeks = Array.from(new Set(exercises.sort((a, b) => Number(a.week) > Number(b.week)).map(week => week.week)));

    const setGender = gender => dispatch(setProgramsGender(gender));

    const setDifficult = difficult => dispatch(setProgramsDifficult(difficult));

    const handleSetActiveDay = day => dispatch(setActiveDay(day));

    const handleSetActiveWeek = week => dispatch(setActiveWeek(week));

    const handleDeleteExercise = docTitle => {
        dispatch(deleteExercise(exercises, docTitle));
    };

    const handleSubmitProgram = () => {
        const result = validation(writeProgram);

        if (result.length) {
            return dispatch(setMessage({ type: 'error', text: writeprogramErrorFields }));
        }
    };

    const deleteExerciseWeek = id => {
        const newExercise = exercises.filter(item => item.week !== id);
        dispatch(updateExercisesWeek(newExercise));
        dispatch(setActiveWeek(id - 1));
    };

    return {
        activeGender: gender,
        activeDifficult: difficult,
        modal,
        setModal,
        img,
        data: exerciseListProgram,
        activeDay,
        activeWeek,
        maxWeeks: maxWeeks.length ? maxWeeks : [1],
        deleteExerciseWeek,
        handleSetActiveDay,
        handleSetActiveWeek,
        handleDeleteExercise,
        handleSubmitProgram,
        setGender,
        setDifficult,
    };
};

export default useCreateOrEditProgram;

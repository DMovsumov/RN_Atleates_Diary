import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setActiveDay, setActiveWeek, updateExercisesWeek } from '../../../../../../redux/actions/writeProgram';

const useWeeksProgram = () => {
    const dispatch = useDispatch();
    const { exercises, activeDay, activeWeek } = useSelector(({ writeProgram }) => writeProgram);
    const [arrayWeeks, setArrayWeeks] = useState([1]);

    useEffect(() => {
        if (exercises.length) {
            return setArrayWeeks(Array.from(new Set(exercises.sort((a, b) => Number(a.week) > Number(b.week)).map(week => week.week))));
        }
    }, []);

    const handleSetActiveDay = day => dispatch(setActiveDay(day));

    const handleSetActiveWeek = week => dispatch(setActiveWeek(week));

    const deleteExerciseWeek = id => {
        const newExercise = exercises.filter(item => item.week !== id);
        dispatch(updateExercisesWeek(newExercise));

        if (activeWeek === id) {
            dispatch(setActiveWeek(id - 1));
        }
    };

    return {
        arrayWeeks,
        activeDay,
        activeWeek,
        handleSetActiveDay,
        handleSetActiveWeek,
        deleteExerciseWeek,
    };
};

export default useWeeksProgram;

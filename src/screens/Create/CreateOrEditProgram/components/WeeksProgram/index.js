import React from 'react';
import Weeks from '../../../../../components/Weeks';
import useWeeksProgram from './hooks/useWeeksProgram';

const WeeksProgram = () => {
    const { arrayWeeks, activeDay, activeWeek, handleSetActiveDay, handleSetActiveWeek, deleteExerciseWeek } = useWeeksProgram();

    return (
        <Weeks
            weeks={arrayWeeks}
            activeWeek={activeWeek}
            activeDay={activeDay}
            setActiveDay={handleSetActiveDay}
            setActiveWeek={handleSetActiveWeek}
            deleteCallback={deleteExerciseWeek}
        />
    );
};

export default WeeksProgram;

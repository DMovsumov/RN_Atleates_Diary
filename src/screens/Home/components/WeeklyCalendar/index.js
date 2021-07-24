import React from 'react';
import { Wrapper, TextDate } from './styled.index';
import useWeeklyCalendar from './hooks/useWeeklyCalendar';

const WeeklyCalendar = () => {
    const { today } = useWeeklyCalendar();

    return (
        <Wrapper>
            <TextDate>{`Today: ${today.day}, ${today.year}`}</TextDate>
        </Wrapper>
    );
};

export default WeeklyCalendar;

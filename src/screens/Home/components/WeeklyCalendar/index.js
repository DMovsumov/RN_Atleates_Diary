import React from 'react';
import { Wrapper, TextDate, WrapperWeek } from './styled.index';
import useWeeklyCalendar from './hooks/useWeeklyCalendar';
import { dayTitle } from '../../../../configs/global';
import ItemWeekly from './Item';

const WeeklyCalendar = () => {
    const { today, getWeek, lang } = useWeeklyCalendar();

    return (
        <Wrapper>
            <TextDate>{`Today: ${today.day}, ${today.year}`}</TextDate>
            <WrapperWeek>
                {getWeek.map((item, index) => (
                    <ItemWeekly
                        key={item + index + dayTitle[index].en}
                        dateNumber={item}
                        title={dayTitle[index][lang]}
                        active={item === today.day}
                    />
                ))}
            </WrapperWeek>
        </Wrapper>
    );
};

export default WeeklyCalendar;

import React from 'react';
import { Wrapper, ScrollBlockWrap, DayBlock } from './styled.index';
import ItemWeek from './ItemWeeks';
import { dayTitle } from '../../configs/global';
import useWeeks from './hooks/useWeeks';

const Weeks = ({ weeks, activeWeek, activeDay, setActiveDay, setActiveWeek, deleteCallback }) => {
    const { lang, maxWeeks, handleAddWeeks, handleDeleteWeeks } = useWeeks(weeks, deleteCallback);

    return (
        <Wrapper>
            <ScrollBlockWrap contentContainerStyle={{ flexDirection: 'row' }} horisontal>
                {maxWeeks.map((item, index) => (
                    <ItemWeek
                        key={item + index + 'week'}
                        title={item}
                        active={item === activeWeek}
                        pressHandle={() => setActiveWeek(item)}
                    />
                ))}
                <ItemWeek title="plus" pressHandle={handleAddWeeks} />
                <ItemWeek title="minus" pressHandle={() => handleDeleteWeeks()} />
            </ScrollBlockWrap>
            <DayBlock>
                {dayTitle.map((item, index) => (
                    <ItemWeek
                        key={index + item[lang]}
                        title={item[lang]}
                        active={index + 1 === activeDay}
                        pressHandle={() => setActiveDay(index + 1)}
                    />
                ))}
            </DayBlock>
        </Wrapper>
    );
};

export default Weeks;

import React from 'react';
import { Wrapper, ScrollExerciseType, Title } from './index.styled';
import ItemFilter from './Item';

const Filters = ({ title, data, active, setActive }) => {
    return (
        <Wrapper>
            {title && <Title text={title} />}
            <ScrollExerciseType horizontal>
                {data.map(item => (
                    <ItemFilter
                        key={item.id + item.item}
                        iconName={item.item}
                        title={item.item}
                        setActive={() => setActive(item.item)}
                        active={item.item === active}
                    />
                ))}
            </ScrollExerciseType>
        </Wrapper>
    );
};

export default Filters;

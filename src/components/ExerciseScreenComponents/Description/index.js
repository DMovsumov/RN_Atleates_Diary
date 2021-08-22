import React from 'react';
import { Desc, Wrapper } from './styled.index';
import useExerciseScreenComponents from '../hooks/useExerciseScreenComponents';

const ExerciseDescription = ({ description }) => {
    const { lang } = useExerciseScreenComponents();

    return (
        <Wrapper>
            <Desc numberOfLines={15}>{description[lang]}</Desc>
        </Wrapper>
    );
};

export default ExerciseDescription;

import React from 'react';
import { Wrapper, Title, Separator, BlockTitle } from './styled.index';
import useExerciseScreenComponents from '../hooks/useExerciseScreenComponents';
import ArrowDown from '../../../assets/arrowDown';

const ExerciseTitle = ({ title, showArrow, arrow }) => {
    const { lang } = useExerciseScreenComponents();

    return (
        <Wrapper>
            <BlockTitle>
                <Title numberOfLines={2}>{title[lang]}</Title>
                {arrow && <ArrowDown drop={showArrow} />}
            </BlockTitle>
            <Separator />
        </Wrapper>
    );
};

export default ExerciseTitle;

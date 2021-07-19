import React from 'react';
import { Wrapper, Separator } from './styled.index';
import useExerciseList from './hooks/useExerciseList';
import ExerciseItem from '../../../../../components/ExerciseItem';

const WrapperExerciseItem = ({ item, last }) => (
    <>
        <ExerciseItem item={item} />
        {!last && <Separator />}
    </>
);

const ExerciseList = () => {
    const { exerciseListProgram } = useExerciseList();

    return (
        <Wrapper>
            {exerciseListProgram.map((item, index) => (
                <WrapperExerciseItem item={item} key={index + item.title.docTitle} last={index === exerciseListProgram.length - 1} />
            ))}
        </Wrapper>
    );
};

export default ExerciseList;

import React from 'react';
import { Wrapper } from './styled.index';
import useExerciseList from './hooks/useExerciseList';
import ExerciseItem from '../../../../../components/ExerciseItem';

const ExerciseList = () => {
    const { exerciseListProgram, handleDeleteExercise } = useExerciseList();
    console.log(exerciseListProgram)

    return (
        <Wrapper>
            {exerciseListProgram.length !== 0 &&
                exerciseListProgram.map((item, index) => (
                    <ExerciseItem
                        item={item}
                        key={index + item.docTitle}
                        last={index === exerciseListProgram.length - 1}
                        deleteHandler={() => handleDeleteExercise(item.docTitle)}
                    />
                ))}
        </Wrapper>
    );
};

export default ExerciseList;

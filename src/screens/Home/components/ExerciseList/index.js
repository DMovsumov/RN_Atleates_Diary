import React from 'react';
import { Wrapper } from './styled.index';
import useExerciseList from './hooks/useExerciseList';
import ExerciseItem from '../../../../components/ExerciseItem';

const ExerciseList = ({ showModal }) => {
    const { exerciseList } = useExerciseList();

    return (
        <Wrapper>
            {exerciseList.length !== 0 &&
                exerciseList.map((item, index) => (
                    <ExerciseItem
                        key={index + item.docTitle}
                        pressHandle={() => showModal(item, index)}
                        item={item}
                        last={index === exerciseList.length - 1}
                    />
                ))}
        </Wrapper>
    );
};

export default ExerciseList;

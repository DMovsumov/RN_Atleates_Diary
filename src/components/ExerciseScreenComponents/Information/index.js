import React from 'react';
import { Wrapper, TextInfo } from './styled.index';

const Information = ({ info }) => {
    const { level, traningPlace, typeExercise, mainMuscle, muscleGroup, otherMuscles } = info;

    return (
        <Wrapper>
            <TextInfo>
                level: {''}
                <TextInfo style={{ color: '#FF5C00' }}>{level}</TextInfo>
            </TextInfo>
            <TextInfo>
                training place: {''}
                <TextInfo style={{ color: '#FF5C00' }}>{traningPlace}</TextInfo>
            </TextInfo>
            <TextInfo>
                type: {''}
                <TextInfo style={{ color: '#FF5C00' }}>{typeExercise}</TextInfo>
            </TextInfo>
            <TextInfo>
                muscle group: {''}
                <TextInfo style={{ color: '#FF5C00' }}>{muscleGroup}</TextInfo>
            </TextInfo>
            <TextInfo>
                main muscle: {''}
                <TextInfo style={{ color: '#FF5C00' }}>{mainMuscle}</TextInfo>
            </TextInfo>
            {otherMuscles && (
                <TextInfo>
                    other muscles: {''}
                    <TextInfo style={{ color: '#FF5C00' }}>{otherMuscles}</TextInfo>
                </TextInfo>
            )}
        </Wrapper>
    );
};

export default Information;

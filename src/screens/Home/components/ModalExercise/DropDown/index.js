import React from 'react';
import { Wrapper, ButtonInfo, InfoBlock } from './styled.index';
import useExerciseDropDown from './hooks/useExerciseDropDown';
import ExerciseTitle from '../../../../../components/ExerciseScreenComponents/Title';
import ExerciseDescription from '../../../../../components/ExerciseScreenComponents/Description';
import DescInstruction from '../../../../../components/ExerciseScreenComponents/DescInstruction';
import Information from '../../../../../components/ExerciseScreenComponents/Information';

const ExerciseDropDown = ({ exercise }) => {
    const { show, handleDropDown } = useExerciseDropDown();
    const { title, descArea, desc, level, traningPlace, typeExercise, mainMuscle, muscleGroup, otherMuscles } = exercise;
    console.log(exercise);

    return (
        <Wrapper>
            <ButtonInfo onPress={handleDropDown}>
                <ExerciseTitle title={title} showArrow={show} arrow />
            </ButtonInfo>
            {show && (
                <InfoBlock>
                    <Information info={{ level, traningPlace, typeExercise, mainMuscle, muscleGroup, otherMuscles }} />
                    <ExerciseDescription description={descArea} />
                    <DescInstruction desc={desc} />
                </InfoBlock>
            )}
        </Wrapper>
    );
};

export default ExerciseDropDown;

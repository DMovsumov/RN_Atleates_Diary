import React from 'react';
import {
    ExerciseWrapper,
    ExerciseInfo,
    ExerciseImage,
    BlockTitle,
    TitleExercise,
    LevelExercise,
    BlockInfo,
    BlockExerciseInfo,
    ExerciseInfoText,
    BlockNumbersExercise,
    ExerciseTextNumber,
    DeleteWrap,
} from './styled.index';
import DeleteIcon from '../../assets/icons/delete';

const ExerciseItem = ({ title, img, level, traningPlace, typeExercise, mainMuscle, muscleGroup, otherMuscles, deleteHandler, pressHandle, style }) => {
    return (
        <ExerciseWrapper style={style} onPress={pressHandle}>
            <ExerciseImage source={{ uri: img.one }} />
            <ExerciseInfo>
                <BlockTitle>
                    <TitleExercise numberOfLines={2} ellipsizeMode="tail">
                        {title.ru}
                    </TitleExercise>
                    <LevelExercise>• {level}</LevelExercise>
                    {deleteHandler && (
                        <DeleteWrap>
                            <DeleteIcon />
                        </DeleteWrap>
                    )}
                </BlockTitle>

                <BlockInfo>
                    <BlockExerciseInfo>
                        <ExerciseInfoText>{traningPlace}</ExerciseInfoText>
                        <ExerciseInfoText>
                            {typeExercise} • {muscleGroup}{' '}
                            {` •  ${(muscleGroup === mainMuscle && otherMuscles ? otherMuscles : mainMuscle) || mainMuscle}`}
                        </ExerciseInfoText>
                    </BlockExerciseInfo>
                    <BlockNumbersExercise>
                        <ExerciseTextNumber>20min</ExerciseTextNumber>
                    </BlockNumbersExercise>
                </BlockInfo>
            </ExerciseInfo>
        </ExerciseWrapper>
    );
};

export default ExerciseItem;

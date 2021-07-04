import React, { useMemo } from 'react';
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

const ExerciseItem = ({ item, deleteHandler, pressHandle, style }) => {
    const { title, img, level, traningPlace, typeExercise, mainMuscle, muscleGroup, otherMuscles, typeExecution, values } = item;

    const renderExecution = useMemo(() => {
        if (typeExecution === 'Set X Reps' || typeExecution === 'Set X Time') {
            return (
                <>
                    {values?.first && values?.second ? (
                        <BlockNumbersExercise>
                            <ExerciseTextNumber>
                                {values.first}x{values.second}
                            </ExerciseTextNumber>
                        </BlockNumbersExercise>
                    ) : (
                        <></>
                    )}
                </>
            );
        }

        if (typeExecution === 'Times') {
            return (
                <>
                    {values?.second ? (
                        <BlockNumbersExercise>
                            <ExerciseTextNumber>{values.second}min</ExerciseTextNumber>
                        </BlockNumbersExercise>
                    ) : (
                        <></>
                    )}
                </>
            );
        }

        return <></>;
    }, [typeExecution, values]);

    return (
        <>
            {title ? (
                <ExerciseWrapper style={style} onPress={pressHandle}>
                    <ExerciseImage source={{ uri: img.one }} />
                    <ExerciseInfo>
                        <BlockTitle>
                            <TitleExercise numberOfLines={2} ellipsizeMode="tail">
                                {title.ru}
                            </TitleExercise>
                            <LevelExercise>• {level}</LevelExercise>
                            {deleteHandler && (
                                <DeleteWrap onPress={deleteHandler}>
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
                            {renderExecution}
                        </BlockInfo>
                    </ExerciseInfo>
                </ExerciseWrapper>
            ) : (
                <></>
            )}
        </>
    );
};

export default ExerciseItem;

import styled from 'styled-components/native';

export const ExerciseWrapper = styled.TouchableOpacity`
    width: 100%;
    padding: 0 5%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const ExerciseInfo = styled.View`
    width: 90%;
    height: 101px;
    background-color: #25273f;
    z-index: 1;
    border-radius: 10px;
    justify-content: space-between;
    padding: 5px 16px 15px 35px;
`;

export const ExerciseImage = styled.Image`
    width: 80px;
    height: 80px;
    border-color: #fff;
    border-width: 1px;
    border-radius: 10px;
    z-index: 2;
    margin-right: -25px;
    margin-bottom: 5px;
    opacity: 0.8;
`;

export const BlockTitle = styled.View`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
`;

export const BlockInfo = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const BlockExerciseInfo = styled.View`
    align-items: flex-start;
`;

export const ExerciseInfoText = styled.Text`
    color: #aab2ba;
    font-family: TTNorms-Regular;
    font-size: 14px;
    line-height: 15px;
`;

export const TitleExercise = styled.Text`
    font-size: 18px;
    font-family: TTNorms-Regular;
    line-height: 21px;
    color: #fff;
    width: 70%;
`;

export const LevelExercise = styled.Text`
    color: #add6ff;
    font-family: TTNorms-Regular;
    font-size: 14px;
    line-height: 14px;
    align-self: flex-start;
    margin-top: 7px;
`;

export const BlockNumbersExercise = styled.View`
    flex-direction: row;
`;

export const ExerciseTextNumber = styled.Text`
    color: #fefefe;
    font-family: TTNorms-Regular;
    font-size: 15px;
    line-height: 15px;
`;

export const DeleteWrap = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    position: absolute;
    border-radius: 5px;
    right: -18px;
    top: -15px;
`;

export const Separator = styled.View`
    width: 80%;
    align-self: center;
    margin: 8px 0;
    height: 2px;
    border-radius: 10px;
    background-color: rgba(141, 153, 178, 0.28);
`;

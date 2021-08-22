import styled from 'styled-components/native';
import Texts from '../../Texts';

export const Wrapper = styled.View`
    width: 100%;
`;

export const BlockTitle = styled.View`
    width: 100%;
    margin-top: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled(Texts)`
    width: 90%;
    font-size: 18px;
`;

export const ExerciseInfoText = styled.Text`
    color: #aab2ba;
    font-family: TTNorms-Regular;
    font-size: 14px;
    line-height: 15px;
`;

export const Separator = styled.View`
    width: 100%;
    align-self: center;
    margin: 15px 0;
    height: 2px;
    border-radius: 10px;
    background-color: rgba(141, 153, 178, 0.28);
`;

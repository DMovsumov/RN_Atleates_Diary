import styled from 'styled-components/native';
import Touches from '../../components/Touches';
import Texts from '../../components/Texts';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 5% 5%;
`;

export const TextsBlock = styled.View`
    flex-direction: row;
    margin-top: 15px;
    justify-content: center;
`;

export const TextsInfo = styled(Texts)`
    font-size: 18px;
    line-height: 27px;
    margin-right: 4px;
    font-family: TTNorms-Regular;
`;

export const TouchSignUp = styled(Touches)`
    font-size: 18px;
`;

export const ErrorText = styled.Text`
    width: 100%;
    color: #e15454;
    font-size: 18px;
    text-align: center;
    margin: 10px 0 20px 0;
`;

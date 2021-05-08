import styled from 'styled-components/native';
import Touches from '../../components/Toches';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    background-color: transparent;
    padding: 5% 5%;
`;

export const TextsBlock = styled.View`
    flex-direction: row;
    margin-top: 15px;
    justify-content: center;
`;

export const Texts = styled.Text`
    font-size: 18px;
    line-height: 27px;
    color: #3f444e;
    margin-right: 4px;
`;

export const TouchSignUp = styled(Touches)`
    font-size: 18px;
`;

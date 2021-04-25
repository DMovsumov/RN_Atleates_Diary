import styled, { css } from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';

export const Container = styled.View`
    width: 100%;
`;

export const InputWrapper = styled.View`
    width: 100%;
    height: 40px;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: center;
`;

export const Inputs = styled.TextInput`
    width: 100%;
    height: 100%;
    color: #fff;
    border-bottom-color: #c4c4c4;
    border-bottom-width: 2px;

    ${({ active }) =>
        active &&
        css`
            border-bottom-color: #176ced;
        `}
`;

export const Label = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export const IsSecure = styled(Entypo)`
    font-size: 24px;
    color: #fefefe;
    position: absolute;
    right: 5px;
`;

import styled, { css } from 'styled-components/native';

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
    color: ${({ theme }) => (theme === 'dark' ? '#fefefe' : '#1A1B1E')};
    font-size: 16px;
    font-family: TTNorms-Regular;
    border-bottom-color: #c4c4c4;
    border-bottom-width: 2px;

    ${({ type }) =>
        type === 'programs' &&
        css`
            font-size: 20px;
            line-height: 23px;
            border-bottom-width: 0;
        `}

    ${({ active }) =>
        active &&
        css`
            border-bottom-color: #176ced;
        `}

    ${({ error }) =>
        error &&
        css`
            border-bottom-color: #f34545;
        `}
`;

export const Label = styled.Text`
    color: ${({ theme }) => (theme === 'dark' ? '#fefefe' : '#1A1B1E')};
    font-size: 18px;
    font-family: TTNorms-Regular;

    ${({ active }) =>
        active &&
        css`
            color: #176ced;
        `}

    ${({ error }) =>
        error &&
        css`
            color: #f34545;
        `}
`;

export const IsSecure = styled.TouchableOpacity`
    color: #fefefe;
    position: absolute;
    right: 5px;
`;

export const IconBlock = styled.View`
    color: #fefefe;
    position: absolute;
    right: 0px;
`;

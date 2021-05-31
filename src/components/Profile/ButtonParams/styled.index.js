import styled, { css } from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
    width: ${({ width }) => width || '100px'};
    height: 40px;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: ${({ active }) => (active ? '#6249E3' : '#EDF1F7')};
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;

    ${({ left }) =>
        left &&
        css`
            border-top-left-radius: 0;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 0;
        `}
`;

export const Texts = styled.Text`
    font-size: 18px;
    line-height: 17px;
    color: #fff;
    font-family: TTNorms-Regular;
`;

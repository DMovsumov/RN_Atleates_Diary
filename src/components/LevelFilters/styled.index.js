import styled, { css } from 'styled-components/native';
import Texts from '../Texts';

export const Wrapper = styled.View`
    width: 100%;
    align-items: flex-start;
`;

export const TextTitle = styled(Texts)`
    margin: 15px 0 15px 18px;

    ${({ typeStyle }) =>
        typeStyle === 'modal' &&
        css`
            margin: 15px 0;
        `}
`;

export const Content = styled.View`
    width: 100%;
    height: 64px;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: rgba(141, 153, 178, 0.28);
    background-color: #222332;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    ${({ typeStyle }) =>
        typeStyle === 'modal' &&
        css`
            border-top-width: 0;
            border-bottom-width: 0;
            background-color: transparent;
            height: 25px;
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        `}
`;

export const ActiveLineWrapper = styled.TouchableOpacity`
    align-items: center;
`;

export const Line = styled.View`
    background-color: #6a40f3;
    height: 4px;
    width: 30px;
    border-radius: 5px;
    margin-top: 4px;
    margin-bottom: -8px;
`;

export const TextsFilter = styled(Texts)`
    font-size: 16px;

    ${({ color }) =>
        color &&
        css`
            color: ${color};
        `}
`;

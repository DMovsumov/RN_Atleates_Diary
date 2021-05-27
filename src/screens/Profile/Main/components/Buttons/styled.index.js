import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
    margin-top: -100px;
    align-items: center;
`;

export const Block = styled.View`
    width: 100%;
    align-items: center;
    margin-top: ${({ mt }) => mt || 0};
`;

export const ButtonPress = styled.Pressable`
    width: 90%;
    height: 60px;
    background-color: #222332;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    ${({ type }) =>
        type === 'evenMain' &&
        css`
            border-top-right-radius: 0;
            border-top-left-radius: 0;
            border-top-width: 1px;
            border-bottom-width: 1px;
            border-color: rgba(141, 153, 178, 0.28);
        `}

    ${({ type }) =>
        type === 'botMain' &&
        css`
            border-top-right-radius: 0;
            border-top-left-radius: 0;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
        `}
`;

export const ButtonView = styled.View`
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
`;

export const ButtonInfoBlock = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TextButton = styled.Text`
    font-size: 18px;
    font-family: TTNorms-Bold;
    text-align: left;
    color: #fff;
    margin-left: 10px;
`;

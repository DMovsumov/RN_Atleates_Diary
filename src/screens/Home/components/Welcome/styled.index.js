import styled, { css } from 'styled-components/native';
import Texts from '../../../../components/Texts';

export const Wrapper = styled.View`
    width: 100%;
    align-items: flex-start;
    margin-bottom: 10px;
`;

export const TextBlock = styled.View`
    width: 100%;
    flex-direction: row;
`;

export const WelcomeText = styled(Texts)`
    font-size: 16px;

    ${({ bold }) =>
        bold &&
        css`
            font-family: TTNorms-Bold;
            font-size: 18px;
        `}
`;

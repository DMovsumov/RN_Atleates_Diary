import styled, { css } from 'styled-components/native';
import Texts from '../../../../../components/Texts';

export const Wrapper = styled.View`
    width: 100%;
    padding: 10px 5%;
`;

export const BlockAuthor = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const BlockWrites = styled.View`
    width: 100%;
`;

export const TextAuthors = styled(Texts)`
    font-size: 18px;
    color: #aab2ba;

    ${({ role }) =>
        role &&
        css`
            color: #ff5c00;
            font-size: 16px;
        `}
`;

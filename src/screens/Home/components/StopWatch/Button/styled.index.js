import styled from 'styled-components/native';
import Texts from '../../../../../components/Texts';

export const Wrapper = styled.Pressable``;

export const TextButton = styled(Texts)`
    color: #fefefe;
    font-size: 24px;
    opacity: ${({ disabled }) => (disabled ? 1 : 0.7)};
`;

import styled from 'styled-components/native';

export const TextsBlock = styled.Text`
    font-family: TTNorms-Regular;
    font-size: 18px;
    color: ${({ theme }) => (theme === 'dark' ? '#fefefe' : '#1A1B1E')};
`;

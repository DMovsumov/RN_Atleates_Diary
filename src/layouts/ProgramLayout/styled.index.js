import styled from 'styled-components/native';

export const Wrapper = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => (theme === 'dark' ? '#171824' : '#F3F5F7')};
`;

export const FlatListBlock = styled.FlatList`
    width: 100%;
`;

export const ScrollViewBlock = styled.ScrollView`

`;

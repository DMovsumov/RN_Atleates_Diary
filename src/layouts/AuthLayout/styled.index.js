import styled from 'styled-components/native';

const SaveArea = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => (theme === 'dark' ? '#171824' : '#F3F5F7')};
    flex: 1;
`;

export default SaveArea;

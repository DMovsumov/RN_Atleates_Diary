import styled from 'styled-components/native';

export const SaveArea = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => (theme === 'dark' ? '#171824' : '#F3F5F7')};
    flex: 1;
`;

export const Header = styled.View`
    height: 40px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-bottom-width: 1px;
    border-color: rgba(141, 153, 178, 0.28);
`;

export const TextScreen = styled.Text`
    color: ${({ theme }) => (theme === 'dark' ? '#fefefe' : '#1A1B1E')};
    font-size: 20px;
    width: 100%;
    text-align: center;
    font-family: TTNorms-Bold;
`;

export const WrapArrow = styled.TouchableOpacity`
    margin-right: auto;
    z-index: 10;
`;

export const RootWrapper = styled.View`
  

`;

import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const SaveArea = styled(SafeAreaView)`
    width: 100%;
    height: 100%;
    background-color: #171824;
    flex: 1;
`;

export const Header = styled.View`
    height: 30px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const TextScreen = styled.Text`
    color: #fefefe;
    font-size: 20px;
    font-family: TTNorms-Bold;
`;

export const WrapArrow = styled.TouchableOpacity`
    margin-right: 33%;
`;

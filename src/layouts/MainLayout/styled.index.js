import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const SaveArea = styled(SafeAreaView)`
    width: 100%;
    height: 100%;
    background-color: #171824;
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
    color: #fefefe;
    font-size: 20px;
    width: 100%;
    text-align: center;
    font-family: TTNorms-Bold;
`;

export const WrapArrow = styled.TouchableOpacity`
    margin-right: auto;
    z-index: 10;
`;

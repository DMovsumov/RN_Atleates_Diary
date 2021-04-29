import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Wrapper = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    border-radius: 10px;
    margin-top: 15px;
`;

export const Linear = styled(LinearGradient)`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const Titles = styled.Text`
    color: #fefefe;
    font-size: 20px;
`;

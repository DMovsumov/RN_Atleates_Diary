import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Wrapper = styled.View`
    width: 64px;
    height: 92px;
    margin-right: 15px;
    align-items: center;
`;

export const Item = styled.TouchableOpacity`
    width: 100%;
    height: 64px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #222332;
`;

export const Linear = styled(LinearGradient)`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

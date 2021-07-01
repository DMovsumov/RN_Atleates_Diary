import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Wrapper = styled.TouchableOpacity`
    width: 45%;
    margin: 5px;
`;

export const Liner = styled(LinearGradient)`
    align-items: center;
    padding: 5px;
    border-radius: 10px;
`;

export const NonActive = styled.View`
    align-items: center;
    padding: 5px;
    border-radius: 10px;
    border-width: 1px;
    border-color: rgba(141, 153, 178, 0.28);
`;

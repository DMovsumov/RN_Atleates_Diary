import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const WrapperTouch = styled.TouchableOpacity`
    margin-right: 12px;
`;

export const Linear = styled(LinearGradient)`
    width: 40px;
    height: 40px;
    border-width: 1px;
    border-color: #7a7894;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const Texts = styled.Text`
    font-family: TTNorms-Regular;
    font-size: 14px;
    margin-right: 3px;
    color: #fefefe;
`;

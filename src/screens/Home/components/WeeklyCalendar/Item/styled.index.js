import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Wrapper = styled.Pressable`
    width: 45px;
    height: 55px;
    border-radius: 10px;
    border-color: #7a7894;
    border-width: ${({ active }) => (active ? '0px' : '1px')};
    margin-top: 15px;
`;

export const Linear = styled(LinearGradient)`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

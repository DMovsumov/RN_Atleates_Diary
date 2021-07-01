import styled from 'styled-components/native';
import ExerciseItem from '../../../../../components/ExerciseItem';

export const Wrapper = styled.View`
    width: 90%;
    margin-top: 50px;
    margin-bottom: 20px;
    align-self: center;
`;

export const BackWrapper = styled.TouchableOpacity`
    
`;

export const ExerciseList = styled.FlatList`
    background-color: ${({ theme }) => (theme === 'dark' ? '#171824' : '#F3F5F7')};
`;

export const Item = styled(ExerciseItem)`
    width: 99%;
`;

export const Separator = styled.View`
    width: 80%;
    align-self: center;
    margin: 8px 0;
    height: 1px;
    border-radius: 10px;
    background-color: rgba(141, 153, 178, 0.28);
`;

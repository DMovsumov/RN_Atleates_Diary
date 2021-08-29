import styled from 'styled-components/native';

export const Wrapper = styled.View`
    width: 100%;
`;

export const WrapperBlock = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-width: 2px;
    border-radius: 10px;
    border-color: #383c4c;
    padding: 10px 5px;
    margin-bottom: 10px;
`;

export const ButtonWrapper = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    background-color: #af65da;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

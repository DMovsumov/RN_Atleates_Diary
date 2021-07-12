import styled from 'styled-components/native';

export const Wrapper = styled.View`
    width: 90%;
    align-self: center;
    height: 65px;
    position: absolute;
    align-items: center;
    bottom: 15px;
    justify-content: center;
    z-index: 100;
    background-color: ${({ bc }) => bc || '#fefefe'};
    border-radius: 4px;
`;

export const Content = styled.View`
    width: 100%;
    height: 100%;
    padding: 0 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Texts = styled.Text`
    width: 70%;
    font-family: TTNorms-Regular;
    font-size: 16px;
    color: #fefefe;
`;

export const ButtonClose = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    background-color: #e25b5b;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.35);
    justify-content: center;
    align-items: center;
    border-radius: 3px;
`;

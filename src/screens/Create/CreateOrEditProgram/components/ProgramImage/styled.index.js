import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
    width: 100%;
    height: 400px;
    align-items: center;
`;

export const ImageWrapper = styled.ImageBackground`
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 50px;
`;

export const Upload = styled.View`
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 50px;
    align-items: center;
    justify-content: center;
    background-color: #25273f;
    padding-left: 10%;
`;

export const BackWrapper = styled.TouchableOpacity`
    position: absolute;
    top: ${({ top }) => top};
    left: 10px;
`;

import styled, { css } from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
    width: 100%;
    border-radius: 10px;
    margin-bottom: 15px;

    ${({ bc }) =>
        bc &&
        css`
            background-color: rgba(0, 0, 0, 0.9);
        `}
`;

export const ImageBc = styled.ImageBackground`
    width: 100%;
    height: 160px;
    border-radius: 10px;
    justify-content: flex-end;
    padding: 15px 10px;
`;

export const Texts = styled.Text`
    font-size: ${({ fs }) => fs || '20px'};
    color: #fff;
    line-height: 21px;
    font-family: TTNorms-Regular;
`;

import styled, { css } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Texts from '../../../../components/Texts';

export const Wrapper = styled.View`
    width: 100%;
    margin: 15px 0;
`;

export const LinearWrap = styled(LinearGradient)`
    width: 100%;
    height: 140px;
    padding: 0 20px 0 10px;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const ControlWrap = styled.View`
    align-items: center;
    justify-content: center;
`;

export const TextTitle = styled(Texts)`
    ${({ bold }) =>
        bold &&
        css`
            font-size: 20px;
            font-family: TTNorms-Bold;
        `}
`;

export const TextTimer = styled(Texts)`
    color: #fefefe;
    font-size: ${({ fs }) => fs || '24px'};
    margin-bottom: 5px;
`;

export const Controllers = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Separator = styled.View`
    height: 24px;
    width: 1px;
    background: #fefefe;
    margin: 0 10px;
`;

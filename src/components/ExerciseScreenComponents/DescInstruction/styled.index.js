import styled from 'styled-components/native';
import Texts from '../../Texts';

export const Wrapper = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const Item = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-width: 2px;
    border-color: #fff;
    border-radius: 10px;
    padding: 0 10px;
    margin-bottom: 10px;
`;

export const TextsInstruction = styled(Texts)`
    font-size: 16px;
    width: 90%;
    margin: 10px 0;
    text-align: center;
`;

export const IndexWrap = styled.View`
    height: 100%;
    align-items: center;
    flex-direction: row;
    border-right-width: 1px;
    border-color: #fff;
    padding-right: 10px;
    margin-right: 10px;
`;

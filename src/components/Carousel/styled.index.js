import styled from 'styled-components/native';

export const Wrapper = styled.View`
    width: 100%;
    position: relative;
    align-items: center;
`;

export const Images = styled.Image`
    opacity: 0.7;
`;

export const MiddleWrap = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 5px;
`;

export const Middle = styled.View`
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: ${({ active }) => (active ? '#AF65DA' : '#7A7894')};
    margin-right: 5px;
`;

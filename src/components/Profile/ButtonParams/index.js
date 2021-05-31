import React from 'react';
import { Wrapper, Texts } from './styled.index';

const ButtonParams = ({ pressHandle, title, width, left, active }) => {
    return (
        <Wrapper onPress={pressHandle} width={width} left={left} active={active}>
            <Texts>{title}</Texts>
        </Wrapper>
    );
};

export default ButtonParams;

import React from 'react';
import { Wrapper, TextButton } from './styled.index';

const ButtonWatch = ({ title, handlePress, disabled }) => (
    <Wrapper onPress={handlePress} disabled={disabled} style={({ pressed }) => [{ opacity: pressed ? 0.4 : 1 }]}>
        <TextButton disabled={!disabled}>{title}</TextButton>
    </Wrapper>
);

export default ButtonWatch;

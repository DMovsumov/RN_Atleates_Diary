import React from 'react';
import { Wrapper, TextMessage, ExtraMessage } from './styled.index';

const FinishMessage = ({ text, extra }) => {
    return (
        <Wrapper>
            <TextMessage>{text}</TextMessage>
            <ExtraMessage>{extra}</ExtraMessage>
        </Wrapper>
    );
};

export default FinishMessage;

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Wrapper, ButtonClose, Texts, Content } from './styled.index';
import Warning from '../../assets/icons/warning';
import CloseIcon from '../../assets/icons/close';
import useMessage from './hooks/useMessage';

const Message = ({ type, text, duration }) => {
    const { handleClose } = useMessage(duration);

    const color = useMemo(() => {
        if (type === 'error') {
            return '#E25B5B';
        }
    }, [type]);

    return (
        <Wrapper bc={color}>
            <Content>
                <Warning />
                <Texts numberOfLines={3} ellipsizeMode="tail">
                    {text}
                </Texts>
                <ButtonClose onPress={handleClose}>
                    <CloseIcon />
                </ButtonClose>
            </Content>
        </Wrapper>
    );
};

export default Message;

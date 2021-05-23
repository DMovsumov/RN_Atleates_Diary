import React from 'react';
import { Wrapper, Texts } from './styled.index';
import PropTypes from 'prop-types';

const Touches = ({ onPress, title, style }) => {
    return (
        <>
            <Wrapper onPress={onPress}>
                <Texts style={style}>{title}</Texts>
            </Wrapper>
        </>
    );
};

export default Touches;

Touches.propTypes = {
    /** Touch на инпут */
    onPress: PropTypes.func,
    /** Текст */
    title: PropTypes.string,
    /** Тип стиля */
    style: PropTypes.any,
};

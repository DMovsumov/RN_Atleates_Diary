import React from 'react';
import { Wrapper, Texts } from './styled.index';
import PropTypes from 'prop-types';

const Touches = ({ onPress, title }) => {
    return (
        <>
            <Wrapper onPress={onPress}>
                <Texts>{title}</Texts>
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
};

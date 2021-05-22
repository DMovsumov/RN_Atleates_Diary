import React from 'react';
import { Wrapper, Linear, Titles } from './styled.index';
import PropTypes from 'prop-types';

const Button = ({ title, onPress, disabled }) => {
    return (
        <Wrapper onPress={onPress} disabled={disabled} style={({ pressed }) => [{ opacity: pressed ? 0.4 : 1 }]}>
            <Linear colors={['#7454fe', '#591ade']} style={{ opacity: disabled ? 0.7 : 1 }}>
                <Titles>{title}</Titles>
            </Linear>
        </Wrapper>
    );
};

export default Button;

Button.propTypes = {
    /**  Title кнопки */
    title: PropTypes.string,
    /** Function */
    onPress: PropTypes.func,
};

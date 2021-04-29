import React from 'react';
import { Wrapper, Linear, Titles } from './styled.index';
import PropTypes from 'prop-types';

const Button = ({ title, onPress }) => {
    return (
        <Wrapper onPress={onPress}>
            <Linear colors={['#7454FE', '#591ADE']}>
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

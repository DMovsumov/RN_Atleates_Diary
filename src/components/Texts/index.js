import React from 'react';
import { TextsBlock } from './styled.index';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Texts = ({ text, style }) => {
    const { theme } = useSelector(({ global }) => global);

    return (
        <TextsBlock style={style} theme={theme}>
            {text}
        </TextsBlock>
    );
};

export default Texts;

Texts.propTypes = {
    /** Текст */
    text: PropTypes.string,
};

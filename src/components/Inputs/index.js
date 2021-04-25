import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    InputWrapper,
    Inputs,
    Label,
    IsSecure,
} from './styled.index';
import useInput from './hooks/useInput';

const Input = ({
    type,
    label,
    keyboardType,
    value,
    changeText,
    isSecure,
    style,
}) => {
    const { secure, active, handleSecure, handleActive } = useInput();

    return (
        <Container style={style}>
            {label && <Label>{label}</Label>}
            <InputWrapper>
                <Inputs
                    active={active}
                    type={type}
                    keyboardType={keyboardType}
                    defaultValue={value}
                    autoCapitalize="none"
                    onChangeText={text => changeText(text)}
                    secureTextEntry={secure}
                    onFocus={handleActive}
                    onBlur={handleActive}
                />
                {isSecure && (
                    <IsSecure
                        name={!secure ? 'eye-with-line' : 'eye'}
                        onPress={handleSecure}
                    />
                )}
            </InputWrapper>
        </Container>
    );
};

export default Input;

Input.propTypes = {
    /** Тип инпута */
    type: PropTypes.string,
    /** Label */
    label: PropTypes.string,
    /** Тип клавиатуры */
    keyboardType: PropTypes.string,
    /** Value */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Function */
    changeText: PropTypes.func,
    /** Скрывать текст или нет */
    isSecure: PropTypes.bool,
};

Input.defaultProps = {
    type: '',
    label: '',
    keyboardType: 'default',
    value: null,
};

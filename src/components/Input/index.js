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
import CloseEye from '../../assets/close-eye';
import Eye from '../../assets/eye';

const Input = ({
    type,
    label,
    keyboardType,
    value,
    changeText,
    isSecure,
    style,
    error,
}) => {
    const { secure, active, handleSecure, handleActive } = useInput();

    return (
        <Container style={style}>
            {label && <Label error={error}>{label}</Label>}
            <InputWrapper>
                <Inputs
                    active={active}
                    error={error}
                    type={type}
                    keyboardType={keyboardType}
                    defaultValue={value}
                    autoCapitalize="none"
                    onChangeText={text => changeText(text)}
                    secureTextEntry={isSecure ? secure : false}
                    onFocus={handleActive}
                    onBlur={handleActive}
                />
                {isSecure && (
                    <IsSecure onPress={handleSecure}>
                        {secure ? <Eye /> : <CloseEye />}
                    </IsSecure>
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

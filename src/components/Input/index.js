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
import { Controller } from 'react-hook-form';

const Input = ({ type, label, keyboardType, isSecure, style, error, control, defaultValue, name, rules }) => {
    const { secure, active, handleSecure, handleActive } = useInput();

    return (
        <Container style={style}>
            {label && (
                <Label error={error} active={active}>
                    {label}
                </Label>
            )}
            <InputWrapper>
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Inputs
                            active={active}
                            error={error}
                            type={type}
                            keyboardType={keyboardType}
                            autoCapitalize="none"
                            onChangeText={text => onChange(text)}
                            value={value}
                            defaultValue={defaultValue || ''}
                            secureTextEntry={isSecure ? secure : false}
                            onFocus={handleActive}
                            onBlur={handleActive}
                        />
                    )}
                    name={name}
                    rules={{ ...rules }}
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
    /** Function */
    changeText: PropTypes.func,
    /** Скрывать текст или нет */
    isSecure: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

Input.defaultProps = {
    type: '',
    label: '',
    keyboardType: 'default',
    defaultValue: '',
};

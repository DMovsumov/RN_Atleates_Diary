import React from 'react';
import PropTypes from 'prop-types';
import { Container, InputWrapper, Inputs, Label, IsSecure } from './styled.index';
import useInput from './hooks/useInput';
import CloseEye from '../../assets/close-eye';
import Eye from '../../assets/eye';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';

const Input = ({ type, label, keyboardType, isSecure, style, error, control, defaultValue, name, rules }) => {
    const { secure, active, handleSecure, handleActive } = useInput();
    const { theme } = useSelector(({ global }) => global);

    return (
        <Container style={style}>
            {label && (
                <Label error={error} active={active} theme={theme}>
                    {label}
                </Label>
            )}
            <InputWrapper>
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Inputs
                            theme={theme}
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
                        {secure ? (
                            <Eye color={theme === 'dark' ? '#fefefe' : '#1A1B1E'} />
                        ) : (
                            <CloseEye color={theme === 'dark' ? '#fefefe' : '#1A1B1E'} />
                        )}
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
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Input.defaultProps = {
    type: '',
    label: '',
    keyboardType: 'default',
    defaultValue: '',
};

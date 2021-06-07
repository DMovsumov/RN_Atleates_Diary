import React, { useMemo } from 'react';
import { Container, TextAreaInput, IconBlock } from './styled.index';
import { Controller } from 'react-hook-form';
import Pen from '../../assets/pen';

const TextArea = ({ placeholder, iconType, name, control, rules }) => {
    const renderIcon = useMemo(() => {
        if (iconType === 'pen') {
            return (
                <IconBlock>
                    <Pen />
                </IconBlock>
            );
        }

        return <></>;
    }, [iconType]);

    return (
        <Container>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextAreaInput
                        placeholder={placeholder}
                        placeholderTextColor="#45475E"
                        multiline={true}
                        numberOfLines={3}
                        onChangeText={text => onChange(text)}
                        value={value}
                    />
                )}
                name={name}
                rules={{ ...rules }}
            />
            {renderIcon}
        </Container>
    );
};

export default TextArea;

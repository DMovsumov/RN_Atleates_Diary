import React, { useEffect } from 'react';
import { Wrapper, WrapperBlock, ButtonWrapper } from './styled.index';
import { useForm } from 'react-hook-form';
import Input from '../../../../../components/Input';
import Plus from '../../../../../assets/plus';
import Minus from '../../../../../assets/minus';

const ItemWriteBlock = ({ data, addValue, deleteValue, index, handleChange, first }) => {
    const { control, watch } = useForm({ defaultValues: { reps: data.reps || '', value: data.value || '' } });

    const [reps, value] = watch(['reps', 'value']);

    useEffect(() => {
        if (reps !== data.reps || value !== data.value) {
            handleChange(index, { reps, value });
        }
    }, [data, index, reps, value]);

    return (
        <>
            <Input name="reps" label="Reps" control={control} style={{ width: '40%' }} />
            <Input name="value" label="Weight" control={control} style={{ width: '40%' }} />
            {first ? (
                <ButtonWrapper onPress={addValue}>
                    <Plus />
                </ButtonWrapper>
            ) : (
                <ButtonWrapper onPress={deleteValue}>
                    <Minus />
                </ButtonWrapper>
            )}
        </>
    );
};

const WriteBlockInfo = ({ info, addValue, deleteValue, handleChange }) => {
    return (
        <Wrapper>
            {info.dataTraining.map((item, index) => (
                <WrapperBlock key={index + 'data training' + item.typeExecution}>
                    <ItemWriteBlock
                        data={item}
                        addValue={addValue}
                        deleteValue={() => deleteValue(index)}
                        index={index}
                        handleChange={handleChange}
                        first={index === 0}
                    />
                </WrapperBlock>
            ))}
        </Wrapper>
    );
};

export default WriteBlockInfo;

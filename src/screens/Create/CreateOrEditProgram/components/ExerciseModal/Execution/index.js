import React, { useCallback } from 'react';
import { BlockButton, BlockInput, BlockSets, Wrapper } from './index.styled';
import Input from '../../../../../../components/Input';
import useExecution from './hooks/useExecution';
import RadioButton from '../../../../../../components/RadioButton';
import Button from '../../../../../../components/Button';
import Texts from '../../../../../../components/Texts';

const Execution = ({ pressHandler, closeNumbers }) => {
    const { control, activeNumber, setActiveNumber, submitHandler } = useExecution(pressHandler);

    const typeNumber = [
        { id: 1, item: 'Set X Reps' },
        { id: 2, item: 'Set X Time' },
        { id: 3, item: 'Times' },
    ];

    const renderInputs = useCallback(() => {
        if (activeNumber === 'Set X Time') {
            return (
                <BlockInput>
                    <Input name={'sets'} label={'Sets:'} control={control} style={{ width: '30%' }} />
                    <Texts text="X" />
                    <Input name={'reps'} label={'Time:'} control={control} style={{ width: '30%' }} />
                </BlockInput>
            );
        }

        if (activeNumber === 'Times') {
            return (
                <BlockInput>
                    <Input name={'reps'} label={'Time:'} control={control} style={{ width: '30%' }} />
                </BlockInput>
            );
        }

        return (
            <BlockInput>
                <Input name={'sets'} label={'Sets:'} control={control} style={{ width: '30%' }} />
                <Texts text="X" />
                <Input name={'reps'} label={'Reps:'} control={control} style={{ width: '30%' }} />
            </BlockInput>
        );
    }, [activeNumber]);

    return (
        <Wrapper onPress={closeNumbers}>
            <BlockSets>
                <BlockButton>
                    {typeNumber.map(item => (
                        <RadioButton
                            key={item.id + item.item}
                            text={item.item}
                            active={item.item === activeNumber}
                            setActive={() => setActiveNumber(item.item)}
                        />
                    ))}
                </BlockButton>
                {renderInputs()}
                <Button title={'Submit'} onPress={submitHandler} />
            </BlockSets>
        </Wrapper>
    );
};

export default Execution;

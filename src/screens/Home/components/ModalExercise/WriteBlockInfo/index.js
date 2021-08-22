import React, { useMemo } from 'react';
import { Wrapper, WrapperBlock, ButtonWrapper } from './styled.index';
import Input from '../../../../../components/Input';
import useWriteBlockInfo from './hooks/useWriteBlockInfo';
import Plus from '../../../../../assets/plus';

const WriteBlockInfo = ({ info }) => {
    const { control } = useWriteBlockInfo(info);

    const render = useMemo(() => {
        return (
            <WrapperBlock>
                <Input name="reps" label="Reps" control={control} style={{ width: '40%' }} />
                <Input name="wight" label="Weight" control={control} style={{ width: '40%' }} />
                <ButtonWrapper>
                    <Plus />
                </ButtonWrapper>
            </WrapperBlock>
        )
    }, [])

    return (
        <Wrapper>
            {render}
        </Wrapper>
    );
};

export default WriteBlockInfo;

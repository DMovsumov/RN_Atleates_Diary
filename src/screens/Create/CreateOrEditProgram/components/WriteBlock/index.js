import React from 'react';
import { Wrapper, BlockAuthor, BlockWrites, TextAuthors } from './styled.index';
import Input from '../../../../../components/Input';
import useWriteBlock from './hooks/useWriteBlock';
import TextArea from '../../../../../components/TextArea';

const WriteBlock = () => {
    const { control } = useWriteBlock();

    return (
        <Wrapper>
            <BlockAuthor>
                <TextAuthors text="@Denioo" />
                <TextAuthors text={'user'} role />
            </BlockAuthor>
            <BlockWrites>
                <Input iconType="pen" control={control} name="title" type="programs" placeholder="Programs title" />
                <TextArea placeholder="Enter the programs note" iconType="pen" name="area" control={control} />
            </BlockWrites>
        </Wrapper>
    );
};

export default WriteBlock;

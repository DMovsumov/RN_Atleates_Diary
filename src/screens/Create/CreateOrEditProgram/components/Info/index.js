import React from 'react';
import { Wrapper, BlockAuthor, BlockWrites, TextAuthors } from './styled.index';
import Input from '../../../../../components/Input';
import useInfo from './hooks/useInfo';
import TextArea from '../../../../../components/TextArea';

const Info = () => {
    const { control, texts, title, description, role, author } = useInfo();
    const { writeprogramTitlePlaceholder, writeprogramAreaPlaceholder } = texts;

    return (
        <Wrapper>
            <BlockAuthor>
                <TextAuthors text={`@${author}`} />
                <TextAuthors text={role} role={true} />
            </BlockAuthor>
            <BlockWrites>
                <Input
                    iconType="pen"
                    control={control}
                    name="title"
                    type="programs"
                    placeholder={writeprogramTitlePlaceholder}
                    defaultValue={title}
                />
                <TextArea
                    placeholder={writeprogramAreaPlaceholder}
                    iconType="pen"
                    name="area"
                    control={control}
                    defaultValue={description}
                />
            </BlockWrites>
        </Wrapper>
    );
};

export default Info;

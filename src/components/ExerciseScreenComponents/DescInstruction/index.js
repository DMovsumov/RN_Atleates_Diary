import React from 'react';
import useExerciseScreenComponents from '../hooks/useExerciseScreenComponents';
import { Wrapper, Item, IndexWrap, TextsInstruction } from './styled.index';
import Texts from '../../Texts';

const DescInstruction = ({ desc }) => {
    const { lang } = useExerciseScreenComponents();
    console.log(desc)

    return (
        <Wrapper>
            {desc.map((item, index) => (
                <Item key={item.en} last={index === desc.length - 1}>
                    <IndexWrap>
                        <Texts style={{ fontSize: 20 }}>{index + 1}</Texts>
                    </IndexWrap>
                    <TextsInstruction>{item[lang]}</TextsInstruction>
                </Item>
            ))}
        </Wrapper>
    );
};

export default DescInstruction;

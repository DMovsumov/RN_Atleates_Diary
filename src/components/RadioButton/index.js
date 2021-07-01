import React from 'react';
import { Wrapper, Liner, NonActive } from './index.styled';
import Texts from '../Texts';

const RadioButton = ({ active, text, setActive }) => {
    return (
        <Wrapper onPress={setActive}>
            {active ? (
                <Liner colors={['#7454fe', '#591ade']}>
                    <Texts text={text} />
                </Liner>
            ) : (
                <NonActive>
                    <Texts text={text} />
                </NonActive>
            )}
        </Wrapper>
    );
};

export default RadioButton;

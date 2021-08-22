import React from 'react';
import { Wrapper, Linear } from './styled.index';
import Texts from '../../../../../components/Texts';

const ItemWeekly = ({ onPress, active, dateNumber, title, theme }) => (
    <Wrapper active={active} onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.4 : 1 }]}>
        <Linear colors={active ? ['#AF65DA', '#715ADB'] : ['#25273F', '#25273F']}>
            <Texts>{dateNumber}</Texts>
            <Texts style={{ fontSize: 17 }}>{title}</Texts>
        </Linear>
    </Wrapper>
);

export default ItemWeekly;

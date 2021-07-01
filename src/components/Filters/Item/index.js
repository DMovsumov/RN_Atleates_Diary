import React from 'react';
import { Wrapper, Linear, Item } from './index.styled';
import ItemIcons from '../../ItemIcon';
import Texts from '../../Texts';

const ItemFilter = ({ active, iconName, title, setActive }) => {
    return (
        <Wrapper>
            <Item onPress={setActive}>
                {active ? (
                    <Linear colors={['#7454FE', '#591ADE']}>
                        <ItemIcons iconName={iconName} />
                    </Linear>
                ) : (
                    <ItemIcons iconName={iconName} />
                )}
            </Item>
            <Texts text={title} style={{ fontSize: 15, marginTop: 7 }} />
        </Wrapper>
    );
};

export default ItemFilter;

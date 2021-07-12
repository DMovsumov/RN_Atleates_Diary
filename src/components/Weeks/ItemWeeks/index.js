import React, { useMemo } from 'react';
import { WrapperTouch, Linear, Texts } from './styled.index';
import Plus from '../../../assets/plus';
import Minus from '../../../assets/minus';

const ItemWeek = ({ title, active, pressHandle }) => {
    const render = useMemo(() => {
        if (title === 'plus') {
            return <Plus height={15} width={14} />;
        }

        if (title === 'minus') {
            return <Minus />;
        }

        return <Texts>{title}</Texts>;
    }, [title]);

    return (
        <WrapperTouch onPress={pressHandle}>
            <Linear colors={active ? ['#715ADB', '#AF65DA'] : ['#25273F', '#25273F']} locations={[1, 0.45]} end={{ x: 0.9, y: 0.9 }}>
                {render}
            </Linear>
        </WrapperTouch>
    );
};

export default ItemWeek;

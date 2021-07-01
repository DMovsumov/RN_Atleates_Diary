import React, { useMemo } from 'react';
import { MainBtn, Wrapper } from './styled.index';
import List from '../../assets/icons/list';
import Texts from '../Texts';
import Arrow from '../../assets/arrow';

const ButtonAdd = ({ type, addHandler }) => {
    const renderImage = useMemo(() => {
        return <List />;
    }, []);

    return (
        <Wrapper onPress={addHandler}>
            <MainBtn>
                {renderImage}
                <Texts text={'Add exercise'} />
            </MainBtn>
            <Arrow right height={30} />
        </Wrapper>
    );
};

export default ButtonAdd;

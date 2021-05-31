import React from 'react';
import { Header, MainBlock, Texts, Wrapper, BtnBlock } from './styled.index';
import useUnits from './hooks/useUnits';
import ButtonParams from '../../../../../components/Profile/ButtonParams';

const Units = ({ units, onPress }) => {
    const {
        texts: { profileMyaccountTitleUnits, allUnitsKg, allUnitsLbs, allUnitsCm, allUnitsFt, allUnitsWeight, allUnitsHeight },
    } = useUnits();

    const { weight, height } = units;

    return (
        <Wrapper>
            <Header>
                <Texts>{profileMyaccountTitleUnits}</Texts>
            </Header>
            <MainBlock>
                <Texts>{allUnitsWeight}</Texts>
                <BtnBlock>
                    <ButtonParams title={allUnitsKg} active={weight === 'Kg'} pressHandle={() => onPress({ weight: 'Kg', editable: true })} />
                    <ButtonParams title={allUnitsLbs} left active={weight === 'Lbs'} pressHandle={() => onPress({ weight: 'Lbs', editable: true })} />
                </BtnBlock>
            </MainBlock>
            <MainBlock>
                <Texts>{allUnitsHeight}</Texts>
                <BtnBlock>
                    <ButtonParams title={allUnitsCm} active={height === 'Cm'} pressHandle={() => onPress({ height: 'Cm', editable: true })} />
                    <ButtonParams title={allUnitsFt} left active={height === 'Ft'} pressHandle={() => onPress({ height: 'Ft', editable: true })} />
                </BtnBlock>
            </MainBlock>
        </Wrapper>
    );
};

export default Units;

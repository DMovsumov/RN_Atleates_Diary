import React from 'react';
import { genderList, difficultList } from '../../../../../configs/global';
import LevelFilters from '../../../../../components/LevelFilters';
import useCheckTypes from './hooks/useCheckTypes';

const CheckTypes = () => {
    const { gender, difficult, setDifficult, setGender } = useCheckTypes();

    return (
        <>
            <LevelFilters filters={difficultList} title="Difficult" active={difficult} setActive={setDifficult} />
            <LevelFilters filters={genderList} title="Gender" active={gender} setActive={setGender} />
        </>
    );
};

export default CheckTypes;

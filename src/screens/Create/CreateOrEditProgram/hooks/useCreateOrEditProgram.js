import { useDispatch, useSelector } from 'react-redux';
import useTranslates from '../../../../i18n/useTranslates';
import { setProgramsDifficult, setProgramsGender } from '../../../../redux/actions/writeProgram';
import {useState} from 'react';

const useCreateOrEditProgram = () => {
    const dispatch = useDispatch();
    const {
        writeprogramGenderFemale,
        writeprogramGenderMale,
        writeprogramDifficultBeginner,
        writeprogramDifficultIntermediate,
        writeprogramDifficultAdvanced,
    } = useTranslates(
        'writeProgram.gender.female',
        'writeProgram.gender.male',
        'writeProgram.difficult.beginner',
        'writeProgram.difficult.intermediate',
        'writeProgram.difficult.advanced',
    );
    const writeProgram = useSelector(({ writeProgram }) => writeProgram);
    const [modal, setModal] = useState(false);
    const { difficult, gender } = writeProgram;

    const setGender = gender => dispatch(setProgramsGender(gender));

    const setDifficult = difficult => dispatch(setProgramsDifficult(difficult));

    return {
        difficult,
        activeGender: gender,
        activeDifficult: difficult,
        modal,
        setModal,
        setGender,
        setDifficult,
    };
};

export default useCreateOrEditProgram;

import { useDispatch, useSelector } from 'react-redux';
import useTranslates from '../../../../i18n/useTranslates';
import { deleteExercise, setProgramsDifficult, setProgramsGender } from '../../../../redux/actions/writeProgram';
import { useEffect, useState } from 'react';
import { getExercisesProgram } from '../../../../redux/actions/exercises';

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
    const { exerciseListProgram } = useSelector(({ exercises }) => exercises);
    const [modal, setModal] = useState(false);
    const { difficult, gender, exercises } = writeProgram;

    useEffect(() => {
        dispatch(getExercisesProgram(exercises));
    }, [exercises]);

    const setGender = gender => dispatch(setProgramsGender(gender));

    const setDifficult = difficult => dispatch(setProgramsDifficult(difficult));

    const handleDeleteExercise = docTitle => {
        dispatch(deleteExercise(exercises, docTitle));
    };

    return {
        difficult,
        activeGender: gender,
        activeDifficult: difficult,
        modal,
        setModal,
        data: exerciseListProgram,
        handleDeleteExercise,
        setGender,
        setDifficult,
    };
};

export default useCreateOrEditProgram;

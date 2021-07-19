import { useDispatch, useSelector } from 'react-redux';
import { setProgramsDifficult, setProgramsGender } from '../../../../../../redux/actions/writeProgram';

const useCheckTypes = () => {
    const dispatch = useDispatch();
    const { difficult, gender } = useSelector(({ writeProgram }) => writeProgram);

    const setGender = gender => dispatch(setProgramsGender(gender));

    const setDifficult = difficult => dispatch(setProgramsDifficult(difficult));

    return {
        difficult,
        gender,
        setGender,
        setDifficult,
    };
};

export default useCheckTypes;

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getDataDiary } from '../../../redux/actions/home';

const useHome = () => {
    const dispatch = useDispatch();
    const { uid } = useSelector(({ profile }) => profile);
    const {
        program: { id, author, img },
    } = useSelector(({ home }) => home);
    const [modal, showModal] = useState(false);
    const [exercise, setExercise] = useState({
        title: '',
        descArea: '',
        traningPlace: '',
        typeExercise: '',
        muscleGroup: '',
        mainMuscle: '',
        otherMuscles: '',
        level: '',
    });

    useEffect(() => {
        dispatch(getDataDiary(uid));
    }, []);

    const handleShowModal = async exercise => {
        await setExercise(exercise);
        await showModal(prevState => !prevState);
    };

    return {
        modal,
        exercise,
        handleShowModal,
        closeModal: () => showModal(prevState => !prevState),
    };
};

export default useHome;

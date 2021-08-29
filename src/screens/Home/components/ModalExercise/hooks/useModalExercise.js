import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setNewExerciseList } from '../../../../../redux/actions/home';

const useModalExercise = (exercise, showModal) => {
    const dispatch = useDispatch();
    const { timer, exerciseList } = useSelector(({ home }) => home);
    const [exerciseModal, setExerciseModal] = useState({ typeExecution: '', values: '', dataTraining: [], docTitle: '' });
    const { typeExecution, values, docTitle, dataTraining, id } = exerciseModal;

    useEffect(() => {
        setExerciseModal(exercise);
    }, [exercise]);

    const addValueTrainings = () => {
        setExerciseModal(prevState => ({ ...prevState, dataTraining: [...prevState.dataTraining, { reps: '', value: '' }] }));
    };

    const deleteValueTrainings = indexDelete => {
        const newData = dataTraining.filter((item, index) => index !== indexDelete);
        setExerciseModal(prevState => ({ ...prevState, dataTraining: [...newData] }));
    };

    const handleChange = (indexChange, data) => {
        const newData = [...dataTraining].map((item, index) => (index === indexChange ? data : item));
        setExerciseModal(prevState => ({ ...prevState, dataTraining: [...newData] }));
    };

    const handleCloseModal = () => {
        const newExerciseList = [...exerciseList];
        const id = newExerciseList.findIndex(item => item.id === exerciseModal.id);

        newExerciseList.splice(id, 1, exerciseModal);
        dispatch(setNewExerciseList(newExerciseList));
        showModal();
    };

    return {
        time: timer,
        exerciseModal,
        infoTraining: { typeExecution, values, docTitle, dataTraining, id },
        handleChange,
        addValueTrainings,
        deleteValueTrainings,
        handleCloseModal,
    };
};

export default useModalExercise;

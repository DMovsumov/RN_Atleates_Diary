import React from 'react';
import { Modal } from 'react-native';
import { Wrapper, WrapperContent } from './styled.index';
import MainLayout from '../../../../layouts/MainLayout';
import useModalExercise from './hooks/useModalExercise';
import Carousel from '../../../../components/Carousel';
import ExerciseDropDown from './DropDown';
import WriteBlockInfo from './WriteBlockInfo';

const ModalExercise = ({ visible, showModal, exercise }) => {
    const { time, infoTraining, handleChange, addValueTrainings, deleteValueTrainings, handleCloseModal } = useModalExercise(
        exercise,
        showModal,
    );

    return (
        <Modal visible={visible} animationType="slide">
            <MainLayout back title={time} backHandle={handleCloseModal}>
                <Wrapper>
                    <Carousel />
                    <WrapperContent>
                        <ExerciseDropDown exercise={exercise} />
                    </WrapperContent>
                    <WrapperContent>
                        <WriteBlockInfo
                            info={infoTraining}
                            addValue={addValueTrainings}
                            deleteValue={deleteValueTrainings}
                            handleChange={handleChange}
                        />
                    </WrapperContent>
                </Wrapper>
            </MainLayout>
        </Modal>
    );
};

export default ModalExercise;

import React from 'react';
import { Modal } from 'react-native';
import { Wrapper, WrapperContent } from './styled.index';
import MainLayout from '../../../../layouts/MainLayout';
import useModalExercise from './hooks/useModalExercise';
import Carousel from '../../../../components/Carousel';
import ExerciseDropDown from './DropDown';
import WriteBlockInfo from './WriteBlockInfo';

const ModalExercise = ({ visible, showModal, exercise, index }) => {
    const { time } = useModalExercise();
    const { typeExecution, values, docTitle } = exercise;

    return (
        <Modal visible={visible} animationType="slide">
            <MainLayout back title={time} backHandle={showModal}>
                <Wrapper>
                    <Carousel />
                    <WrapperContent>
                        <ExerciseDropDown exercise={exercise} />
                    </WrapperContent>
                    <WrapperContent>
                        <WriteBlockInfo info={{ typeExecution, values, docTitle, index }} />
                    </WrapperContent>
                </Wrapper>
            </MainLayout>
        </Modal>
    );
};

export default ModalExercise;

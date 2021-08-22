import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Welcome from './components/Welcome';
import { Wrapper } from './styled.index';
import WeeklyCalendar from './components/WeeklyCalendar';
import StopWatch from './components/StopWatch';
import useHome from './hooks/useHome';
import ExerciseList from './components/ExerciseList';
import ModalExercise from './components/ModalExercise';

const Home = ({ navigation }) => {
    const { modal, exercise, index, handleShowModal, closeModal } = useHome();

    return (
        <MainLayout>
            <Wrapper>
                <ModalExercise visible={modal} showModal={closeModal} exercise={exercise} index={index} />
                <Welcome />
                <WeeklyCalendar />
                <StopWatch />
                <ExerciseList showModal={handleShowModal} />
            </Wrapper>
        </MainLayout>
    );
};

export default Home;

import React from 'react';
import { Modal } from 'react-native';
import { BackWrapper, Wrapper, Item, Separator } from './styled.index';
import { useSelector } from 'react-redux';
import Filters from '../../../../../components/Filters';
import LevelFilters from '../../../../../components/LevelFilters';
import { difficultList } from '../../../../../configs/global';
import useExerciseModal from './hooks/useExerciseModal';
import ProgramLayout from '../../../../../layouts/ProgramLayout';
import Execution from './Execution';
import Arrow from '../../../../../assets/arrow';

const ExerciseModal = ({ visible, showModal }) => {
    const {
        exerciseType,
        setExerciseType,
        muscleGroup,
        setMuscleGroup,
        exerciseList,
        handleSubmitExercise,
        handleSetSelect,
        setShowNumbers,
        showNumbers,
    } = useExerciseModal();
    const { theme } = useSelector(({ global }) => global);

    const exercisesType = [
        { id: 1, item: 'Strength' },
        { id: 2, item: 'Cardio' },
        { id: 3, item: 'Swim' },
        { id: 4, item: 'Yoga' },
        { id: 5, item: 'Aerobics' },
        { id: 6, item: 'Balance' },
    ];

    const muscleGroups = [
        { id: 1, item: 'Back' },
        { id: 2, item: 'Arm' },
        { id: 3, item: 'Legs' },
        { id: 4, item: 'Chest' },
        { id: 5, item: 'Shoulders' },
    ];

    return (
        <Modal visible={visible} animationType="slide">
            <ProgramLayout
                HeaderComponent={() => (
                    <Wrapper>
                        <BackWrapper onPress={showModal}>
                            <Arrow />
                        </BackWrapper>
                        <Filters data={exercisesType} title={'Exercise Type'} active={exerciseType} setActive={setExerciseType} />
                        {exerciseType === 'Strength' && (
                            <Filters data={muscleGroups} title={'Muscle Group'} active={muscleGroup} setActive={setMuscleGroup} />
                        )}
                        <LevelFilters title={'Difficult'} filters={difficultList} typeStyle="modal" />
                    </Wrapper>
                )}
                data={exerciseList}
                renderItem={({ item }) => (
                    <Item {...item} pressHandle={() => handleSetSelect({ docTitle: item.docTitle, typeExercise: item.typeExercise })} />
                )}
                separator={() => <Separator />}
            />
            {showNumbers && <Execution pressHandler={handleSubmitExercise} closeNumbers={() => setShowNumbers(false)} />}
        </Modal>
    );
};

export default ExerciseModal;

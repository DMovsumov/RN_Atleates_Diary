import React from 'react';
import { Wrapper, ButtonSubmitWrapper, Separator, TitleBlock } from './styled.index';
import ProgramImage from './components/ProgramImage';
import WriteBlock from './components/WriteBlock';
import ProgramLayout from '../../../layouts/ProgramLayout';
import ExerciseItem from '../../../components/ExerciseItem';
import LevelFilters from '../../../components/LevelFilters';
import Button from '../../../components/Button';
import Texts from '../../../components/Texts';
import useCreateOrEditProgram from './hooks/useCreateOrEditProgram';
import ButtonAdd from '../../../components/ButtonAdd';
import ExerciseModal from './components/ExerciseModal';
import { genderList, difficultList } from '../../../configs/global';

const CreateOrEditProgram = ({ navigation }) => {
    const { activeDifficult, activeGender, modal, setModal, data, handleDeleteExercise, setGender, setDifficult } =
        useCreateOrEditProgram();

    return (
        <>
            <ProgramLayout
                HeaderComponent={() => (
                    <Wrapper>
                        <ProgramImage navigation={navigation} />
                        <WriteBlock />
                        <TitleBlock>
                            <Texts text="Exercises:" style={{ fontSize: 20 }} />
                        </TitleBlock>
                    </Wrapper>
                )}
                FooterComponent={() => (
                    <Wrapper>
                        <ButtonAdd addHandler={() => setModal(!modal)} />
                        <LevelFilters filters={difficultList} title="Difficult" active={activeDifficult} setActive={setDifficult} />
                        <LevelFilters filters={genderList} title="Gender" active={activeGender} setActive={setGender} />
                        <ButtonSubmitWrapper>
                            <Button title="Submit" />
                        </ButtonSubmitWrapper>
                    </Wrapper>
                )}
                data={data}
                renderItem={({ item }) => <ExerciseItem item={item} deleteHandler={() => handleDeleteExercise(item.docTitle)} />}
                separator={() => <Separator />}
            />
            <ExerciseModal visible={modal} showModal={() => setModal(!modal)} />
        </>
    );
};

export default CreateOrEditProgram;

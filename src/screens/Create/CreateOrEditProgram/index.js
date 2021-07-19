import React from 'react';
import { Wrapper, ButtonSubmitWrapper, TitleBlock } from './styled.index';
import Image from './components/Image';
import Info from './components/Info';
import ProgramLayout from '../../../layouts/ProgramLayout';
import Button from '../../../components/Button';
import Texts from '../../../components/Texts';
import useCreateOrEditProgram from './hooks/useCreateOrEditProgram';
import ButtonAdd from '../../../components/ButtonAdd';
import ExerciseModal from './components/ExerciseModal';
import WeeksProgram from './components/WeeksProgram';
import CheckTypes from './components/CheckTypes';
import ExerciseList from './components/ExerciseList';

const CreateOrEditProgram = ({ navigation }) => {
    const { modal, setModal, handleSubmitProgram } = useCreateOrEditProgram();

    return (
        <>
            <ProgramLayout>
                <Wrapper>
                    <Image navigation={navigation} />
                    <Info />
                    <TitleBlock>
                        <Texts text="Exercises:" style={{ fontSize: 20 }} />
                    </TitleBlock>
                    <WeeksProgram />
                    <ExerciseList />
                    <ButtonAdd addHandler={() => setModal(!modal)} />
                    <CheckTypes />
                    <ButtonSubmitWrapper>
                        <Button title="Submit" onPress={handleSubmitProgram} />
                    </ButtonSubmitWrapper>
                </Wrapper>
                <ExerciseModal visible={modal} showModal={() => setModal(!modal)} />
            </ProgramLayout>
        </>
    );
};

export default CreateOrEditProgram;

import React from 'react';
import { Wrapper } from './styled.index';
import ProgramImage from './components/ProgramImage';
import WriteBlock from './components/WriteBlock';
import ProgramLayout from '../../../layouts/ProgramLayout';

const CreateOrEditProgram = () => {
    return (
        <ProgramLayout>
            <Wrapper>
                <ProgramImage />
                <WriteBlock />
            </Wrapper>
        </ProgramLayout>
    );
};

export default CreateOrEditProgram;

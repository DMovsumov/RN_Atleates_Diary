import React from 'react';
import { Wrapper } from './styled.index';
import { useSelector } from 'react-redux';

const ProgramLayout = ({ children }) => {
    const { theme } = useSelector(({ global }) => global);

    return <Wrapper theme={theme}>{children}</Wrapper>;
};

export default ProgramLayout;

import React, { useMemo } from 'react';
import MainLayout from '../../../layouts/MainLayout';
import { Wrapper } from './styled.index';
import ChooseExercise from './components/ChooseExercise';
import useMain from './hooks/useMain';

const Main = ({ navigation }) => {
    const { list } = useMain(navigation);

    const rendersChooses = useMemo(() => {
        return (
            <>
                {list.map(item => (
                    <ChooseExercise {...item} key={item.img + item.title} />
                ))}
            </>
        );
    }, [list]);

    return (
        <MainLayout>
            <Wrapper>{rendersChooses}</Wrapper>
        </MainLayout>
    );
};

export default Main;

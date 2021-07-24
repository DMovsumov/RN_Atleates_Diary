import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Welcome from './components/Welcome';
import { Wrapper } from './styled.index';
import WeeklyCalendar from './components/WeeklyCalendar';

const Home = () => {
    return (
        <MainLayout>
            <Wrapper>
                <Welcome />
                <WeeklyCalendar />
            </Wrapper>
        </MainLayout>
    );
};

export default Home;

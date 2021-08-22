import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const useWeeklyCalendar = () => {
    const { lang } = useSelector(({ global }) => global);
    const dateNow = new Date();

    const today = useMemo(() => {
        return {
            day: dateNow.getDate(),
            year: dateNow.getFullYear(),
        };
    }, []);

    const getWeek = useMemo((date = new Date()) => {
        const arrayDate = [];

        const dayIndex = date.getDay();
        const diffToLastMonday = dayIndex !== 0 ? dayIndex - 1 : 6;
        const dateOfMonday = new Date(date.setDate(date.getDate() - diffToLastMonday));

        for (let i = 0; i < 7; i++) {
            const dating = new Date(date.setDate(dateOfMonday.getDate() + i));

            arrayDate.push(dating.getDate());
        }

        return arrayDate;
    }, []);

    return {
        today,
        getWeek,
        lang,
    };
};

export default useWeeklyCalendar;

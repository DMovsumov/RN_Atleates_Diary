import { useMemo } from 'react';

const useWeeklyCalendar = () => {
    const today = useMemo(() => {
        const dateNow = new Date();

        return {
            day: dateNow.getDate(),
            year: dateNow.getFullYear(),
        };
    }, []);

    return {
        today,
    };
};

export default useWeeklyCalendar;

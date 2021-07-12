import { useSelector } from 'react-redux';
import { useState } from 'react';

const useWeeks = (weeks, deleteCallback) => {
    const { lang } = useSelector(({ global }) => global);
    const [maxWeeks, setMaxWeeks] = useState(weeks);

    const handleAddWeeks = () => {
        setMaxWeeks(prevState => [...prevState, prevState.length + 1]);
    };

    const handleDeleteWeeks = () => {
        const newWeeks = [...maxWeeks];
        newWeeks.splice(maxWeeks.length - 1, 1);
        setMaxWeeks(newWeeks);
        deleteCallback(maxWeeks.length);
    };

    return {
        lang,
        maxWeeks,
        handleAddWeeks,
        handleDeleteWeeks,
    };
};

export default useWeeks;

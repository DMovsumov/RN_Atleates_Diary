import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const useWeeks = (weeks, deleteCallback) => {
    const { lang } = useSelector(({ global }) => global);
    const [maxWeeks, setMaxWeeks] = useState([1]);

    const handleAddWeeks = () => {
        setMaxWeeks(prevState => [...prevState, prevState.length + 1]);
    };

    useEffect(() => {
        setMaxWeeks(weeks);
    }, []);

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

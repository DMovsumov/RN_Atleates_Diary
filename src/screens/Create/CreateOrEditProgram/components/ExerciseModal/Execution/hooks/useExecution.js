import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

const useExecution = pressHandle => {
    const [activeNumber, setActiveNumber] = useState('Set X Reps');
    const [values, setValues] = useState({ first: '', second: '' });

    const { control, watch } = useForm({ defaultValues: { sets: '', reps: '' } });
    const fields = ['sets', 'reps'];
    const [sets, reps] = watch(fields);

    useEffect(() => {
        if (sets || reps) {
            setValues({ first: sets, second: reps });
        }
    }, [sets, reps, setValues]);

    const submitHandler = () => {
        pressHandle({
            typeExecution: activeNumber,
            values,
        });
    };

    return {
        control,
        activeNumber,
        setActiveNumber,
        submitHandler
    };
};

export default useExecution;

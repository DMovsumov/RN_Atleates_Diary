import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

const useExecution = pressHandle => {
    const [activeNumber, setActiveNumber] = useState('Set X Reps');
    const [values, setValues] = useState({ first: '', second: '' });

    const { control, watch, handleSubmit } = useForm({ defaultValues: { sets: '', reps: '' } });
    const fields = ['sets', 'reps'];
    const [sets, reps] = watch(fields);

    useEffect(() => {
        setValues({ first: sets, second: reps });
    }, [sets, reps, setValues]);

    const submitHandler = async ({ sets, reps }) => {
        await pressHandle({
            typeExecution: activeNumber,
            values: { first: sets, second: reps },
        });
    };

    return {
        control,
        activeNumber,
        setActiveNumber,
        handleSubmit,
        submitHandler,
    };
};

export default useExecution;

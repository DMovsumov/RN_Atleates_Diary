import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

const useExecution = pressHandle => {
    const [activeNumber, setActiveNumber] = useState('Set X Reps');
    const [values, setValues] = useState({ first: '', second: '' });
    const [dataTraining, setDataTraining] = useState([{}]);

    const { control, watch, handleSubmit } = useForm({ defaultValues: { sets: '', reps: '' } });
    const fields = ['sets', 'reps'];
    const [sets, reps] = watch(fields);

    useEffect(() => {
        setValues({ first: sets, second: reps });

        if (activeNumber === 'Set X Reps' && sets) {
            const array = [];

            for (let i = 0; i < sets; i++) {
                array.push({ reps, weight: '' });
            }
            return setDataTraining(array);
        }

        if (activeNumber === 'Set X Time' && sets) {
            const array = [];

            for (let i = 0; i < sets; i++) {
                array.push({ reps, times: '' });
            }

            return setDataTraining(array);
        }

        return setDataTraining(reps);
    }, [sets, reps, setValues, activeNumber]);

    const submitHandler = async ({ sets, reps }) => {
        await pressHandle({
            typeExecution: activeNumber,
            values: { first: sets, second: reps },
            dataTraining,
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

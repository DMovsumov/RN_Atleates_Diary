import { useForm } from 'react-hook-form';

const useWriteBlockInfo = (info) => {
    const { control, watch, handleSubmit } = useForm({ defaultValues: { sets: '', reps: '' } });

    return {
        control,
    };
};

export default useWriteBlockInfo;

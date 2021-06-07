import { useForm } from 'react-hook-form';

const useWriteBlock = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
        watch,
        clearErrors,
    } = useForm();

    return {
        control,
    };
};

export default useWriteBlock;

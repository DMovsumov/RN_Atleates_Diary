import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProgramsArea, setProgramsTitle } from '../../../../../../redux/actions/writeProgram';
import useTranslates from '../../../../../../i18n/useTranslates';

const useInfo = () => {
    const dispatch = useDispatch();
    const writeProgram = useSelector(({ writeProgram }) => writeProgram);
    const profile = useSelector(({ profile }) => profile);
    const texts = useTranslates('writeProgram.title.placeholder', 'writeProgram.area.placeholder');
    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
        setValue,
        watch,
        clearErrors,
    } = useForm({
        defaultValues: { title: writeProgram.title, area: writeProgram.description },
    });
    const fields = ['title', 'area'];
    const [title, area] = watch(fields);

    useEffect(() => {
        if (title) {
            dispatch(setProgramsTitle(title));
        }

        if (area) {
            dispatch(setProgramsArea(area));
        }
    }, [title, area, dispatch]);

    return {
        control,
        texts,
        title: writeProgram.title,
        description: writeProgram.description,
        author: writeProgram.author.name || profile.displayName,
        role: writeProgram.author.role || profile.role,
    };
};

export default useInfo;

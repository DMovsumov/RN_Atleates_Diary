import { useDispatch, useSelector } from 'react-redux';
import useTranslates from '../../../../i18n/useTranslates';
import { useState } from 'react';
import useValidationProgram from '../../../../hooks/useValidationProgram';
import { setMessage } from '../../../../redux/actions/global';

const useCreateOrEditProgram = () => {
    const dispatch = useDispatch();
    const { writeprogramErrorFields } = useTranslates('writeProgram.error.fields');
    const writeProgram = useSelector(({ writeProgram }) => writeProgram);
    const [modal, setModal] = useState(false);
    const { validation } = useValidationProgram();

    const handleSubmitProgram = () => {
        const result = validation(writeProgram);

        if (result.length) {
            return dispatch(setMessage({ type: 'error', text: writeprogramErrorFields }));
        }
    };

    return {
        modal,
        setModal,
        handleSubmitProgram,
    };
};

export default useCreateOrEditProgram;

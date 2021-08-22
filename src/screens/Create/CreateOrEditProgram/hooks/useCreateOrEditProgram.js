import { useDispatch, useSelector } from 'react-redux';
import useTranslates from '../../../../i18n/useTranslates';
import { useState } from 'react';
import useValidationProgram from '../../../../hooks/useValidationProgram';
import { setMessage } from '../../../../redux/actions/global';
import database from '@react-native-firebase/database';

const useCreateOrEditProgram = () => {
    const dispatch = useDispatch();
    const { writeprogramErrorFields } = useTranslates('writeProgram.error.fields');
    const { title, description, img, difficult, gender, exercises, tempImage } = useSelector(({ writeProgram }) => writeProgram);
    const { displayName, role, uid } = useSelector(({ profile }) => profile);
    const [modal, setModal] = useState(false);
    const { validation, typeProgram } = useValidationProgram();

    console.log(exercises)

    const handleSubmitProgram = async () => {
        const result = await validation({ title, description, difficult, gender, exercises });

        if (result.length) {
            return dispatch(setMessage({ type: 'error', text: writeprogramErrorFields }));
        }

        const data = {
            title,
            description,
            gender,
            difficult,
            exercises,
            img: tempImage.uri || img,
            programType: await typeProgram(exercises),
            date: new Date().toString(),
            author: {
                displayName,
                role,
                uid,
            },
        };

        const resultData = await database().ref('/Programs/').push({});
        await console.log(resultData);
        await resultData.update({ id: resultData.key, ...data });
        await database().ref(`/Users/${uid}/MyPrograms/${resultData.key}`).set({
            id: resultData.key,
            img: data.img,
            author: uid,
            title,
        });
    };

    return {
        modal,
        setModal,
        handleSubmitProgram,
    };
};

export default useCreateOrEditProgram;

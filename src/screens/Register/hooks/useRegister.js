import useTranslates from '../../../i18n/useTranslates';
import { useDispatch, useSelector } from 'react-redux';
import {
    createUserWithEmail,
    setEmail,
    setName,
    setPassword,
} from '../../../redux/action/auth';

const useRegister = navigation => {
    const texts = useTranslates(
        'all.sign.up',
        'login.email',
        'login.password',
        'all.sign.up.name',
        'all.sign.up.back',
    );
    const { email, password, name } = useSelector(({ auth }) => auth);
    const dispatch = useDispatch();

    const handleChangeEmail = text => {
        dispatch(setEmail(text));
    };

    const handleChangePass = text => {
        dispatch(setPassword(text));
    };

    const handleChangeName = text => {
        dispatch(setName(text));
    };

    const onSubmit = async () => {
        await dispatch(createUserWithEmail(email, password, name));
    };

    const goBack = () => {
        navigation.push('Login');
    };

    return {
        texts,
        handleChangeEmail,
        handleChangePass,
        handleChangeName,
        goBack,
        onSubmit,
    };
};

export default useRegister;

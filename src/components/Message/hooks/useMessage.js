import { useDispatch } from 'react-redux';
import { setMessage } from '../../../redux/actions/global';
import { useEffect } from 'react';

const useMessage = duration => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setMessage({ type: '', text: '' }));
    };

    useEffect(() => {
        setTimeout(() => dispatch(setMessage({ type: '', text: '' })), duration * 1000);
    }, [dispatch, duration]);

    return {
        handleClose,
    };
};

export default useMessage;

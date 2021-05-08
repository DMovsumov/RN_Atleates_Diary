import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { signWithGoogle } from '../../../../../redux/action/auth';

const useGoogleButton = () => {
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);

    const googlePressHandle = async () => {

    };

    return {
        googlePressHandle,
    };
};

export default useGoogleButton;

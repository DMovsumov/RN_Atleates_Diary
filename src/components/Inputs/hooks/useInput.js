import { useState } from 'react';

const useInput = () => {
    const [active, setActive] = useState(false);
    const [secure, setSecure] = useState(false);

    const handleSecure = () => {
        setSecure(prevState => !prevState);
    };

    const handleActive = () => {
        setActive(prevState => !prevState);
    };

    return {
        active,
        secure,
        handleSecure,
        handleActive,
    };
};

export default useInput;

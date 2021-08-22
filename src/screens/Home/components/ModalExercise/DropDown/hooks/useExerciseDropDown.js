import { useState } from 'react';

const useExerciseDropDown = () => {
    const [show, setShow] = useState(false);

    const handleDropDown = () => setShow(prevState => !prevState);

    return {
        show,
        handleDropDown,
    };
};

export default useExerciseDropDown;

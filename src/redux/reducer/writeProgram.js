const initialState = {
    author: {
        name: '',
        role: '',
    },
    title: '',
    description: '',
    img: '',
    difficult: '',
    gender: '',
    exercises: [],
    foods: [],
};

const writeProgram = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default writeProgram;

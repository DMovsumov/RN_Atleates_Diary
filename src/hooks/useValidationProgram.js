const useValidationProgram = () => {
    const validation = program => {
        const place = Object.entries(program).reduce((acc, curr) => {
            if (curr[1] === '' || (curr[0] === 'exercises' && !curr[1].length)) {
                if (curr[0] !== 'date' && curr[0] !== 'description') {
                    acc.push(curr[0]);
                }
            }

            return acc;
        }, []);

        if (place.length) {
            return place;
        } else {
            return [];
        }
    };

    const typeProgram = exercises => {
        const typeExercise = exercises.map(item => item.typeExercise);

        const result = typeExercise.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
        }, {});

        return Object.entries(result).sort((a, b) => a[1] > b[1])[0][0];
    };

    return {
        validation,
        typeProgram,
    };
};

export default useValidationProgram;

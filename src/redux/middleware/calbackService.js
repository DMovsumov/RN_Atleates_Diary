const callbackService = store => next => async action => {
    const { data, callback, fail, type } = action;

    if (callback) {
        await next({ type, data });
        if (fail === false) {
            callback(
                {
                    dispatch: store.dispatch,
                    getState: store.getState,
                },
                data,
            );
        } else {
        }
    } else {
        next(action);
    }
};

export default callbackService;

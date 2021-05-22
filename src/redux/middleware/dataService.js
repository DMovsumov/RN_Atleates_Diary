import database from '@react-native-firebase/database';

const dataService = store => next => async action => {
    const { limit, url, params, data, types, callback, errors } = action;
    const dispatch = store.dispatch;

    if (url) {
        try {
            let result;
            // await dispatch(setLoading(true))
            const urlRef = await database().ref(url);

            switch (params.type) {
                case 'get':
                    if (limit) {
                        result = await urlRef.limitToFirst(limit).once('value');
                    } else {
                        result = await urlRef.once('value');
                    }
                    break;
                case 'post':
                    try {
                        if (params.typeDataBase === 'push') {
                            await urlRef.push(data);
                        } else {
                            await urlRef.set(data);
                        }
                    } catch (e) {
                        await next({
                            errors,
                            callback,
                            data: e,
                            fail: true,
                        });
                    }
                    // await dispatch(setLoading(false));
                    break;
                default:
                    return console.log('Set type http');
            }

            await next({
                callback,
                data: result.toJSON(),
                type: types.success || '',
                fail: false,
            });

            // await dispatch(setLoading(false));
        } catch (error) {
            await next({
                errors,
                callback,
                data: error,
                fail: true,
            });
        }
    } else {
        next(action);
    }
};

export default dataService;

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import user from './reducer/user';
import auth from './reducer/auth';

const rootReducer = combineReducers({
    user,
    auth,
});

export default createStore(rootReducer, applyMiddleware(thunk));

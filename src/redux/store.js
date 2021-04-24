import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import user from './reducer/user';

const rootReducer = combineReducers({
    user,
});

export default createStore(rootReducer, applyMiddleware(thunk));

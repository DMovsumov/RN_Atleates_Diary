import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import auth from './reducer/auth';

const rootReducer = combineReducers({
    auth,
});

export default createStore(rootReducer, applyMiddleware(thunk));

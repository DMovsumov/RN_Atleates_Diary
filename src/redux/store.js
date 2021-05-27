import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dataService from './middleware/dataService';
import callbackService from './middleware/calbackService';
import auth from './reducer/auth';
import profile from './reducer/profile';
import global from './reducer/global';

const rootReducer = combineReducers({
    auth,
    profile,
    global,
});

export default createStore(rootReducer, applyMiddleware(thunk, dataService, callbackService));

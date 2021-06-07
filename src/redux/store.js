import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dataService from './middleware/dataService';
import callbackService from './middleware/calbackService';
import auth from './reducer/auth';
import profile from './reducer/profile';
import global from './reducer/global';
import writeProgram from './reducer/writeProgram';

const rootReducer = combineReducers({
    auth,
    profile,
    global,
    writeProgram,
});

export default createStore(rootReducer, applyMiddleware(thunk, dataService, callbackService));

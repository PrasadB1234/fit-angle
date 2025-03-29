import { createStore, applyMiddleware } from 'redux';
import  {composeWithDevTools}  from 'redux-devtools-extension'
// import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer';
import {thunk} from 'redux-thunk';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    // composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
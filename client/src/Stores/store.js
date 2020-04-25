import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';


import rootReducer from '../Reducers/reducers';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,composeWithDevTools( applyMiddleware(logger)));
    return store;
}
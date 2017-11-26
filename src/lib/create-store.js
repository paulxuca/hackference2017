import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './create-reducer';

export default () => {
    const reducer = createReducer();
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(reducer, applyMiddleware(sagaMiddleware));

    return store;
};

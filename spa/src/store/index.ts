import authReducer from './auth/Reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchSagas } from './auth/Index';

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    if (typeof devToolsExtension === 'function') {
        composeEnhancers = devToolsExtension;
    }
}

const rootReducer = combineReducers({
    auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(watchSagas);
export default store;

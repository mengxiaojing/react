import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './Reducers/reducer'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
const store = createStore(reducer, enhancer);

sagaMiddleware.run(todoSagas)

export default store
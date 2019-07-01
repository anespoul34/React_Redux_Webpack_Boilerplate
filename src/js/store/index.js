// src/js/store/index.js

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middlewares";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
        rootReducer,
        // Redux-thunk example:
        // storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
        // Redux-saga example:
        storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware))
        );

initialiseSagaMiddleware.run(apiSaga);

export default store;
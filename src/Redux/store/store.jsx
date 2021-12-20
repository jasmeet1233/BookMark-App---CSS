import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { bookmarkReducer } from "./loginSignupReducer";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({bookmarkReducer});

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store; 


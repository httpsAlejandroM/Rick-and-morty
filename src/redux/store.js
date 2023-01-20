import {createStore, applyMiddleware, compose} from "redux";
import { ThunkMiddleware } from "redux-thunk";
import rooReducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, composeEnhancer(applyMiddleware(ThunkMiddleware))
)

export default store;
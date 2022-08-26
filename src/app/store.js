import { applyMiddleware, combineReducers, compose} from "redux";
import { legacy_createStore as createStore} from 'redux';
import thunk from "redux-thunk";
import counterReducer from "./features/Counter/reducer";

let rootReducer = combineReducers({
    counter: counterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOL_EXTENTION_COMPOSE__ || compose;
let store = createStore  (rootReducer, composeEnhancers (applyMiddleware(thunk)));

export default store;


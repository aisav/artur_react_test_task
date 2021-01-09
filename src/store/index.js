import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import CatsReducer from "./reducers/CatsReducer";

const rootReducer = combineReducers({
    cats: CatsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
);

export default  store;


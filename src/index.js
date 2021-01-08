import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { BrowserRouter } from 'react-router-dom';
import ReduxThunk from "redux-thunk";
import CatsReducer from "./store/reducers/CatsReducer";


const rootReducer = combineReducers({
    cats: CatsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
);

ReactDOM.render(<BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode></BrowserRouter>,
    document.getElementById('root')
);

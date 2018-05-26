import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import './index.css';
// import 'materialize-css/dist/css/materialize.min.css';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/index';

import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
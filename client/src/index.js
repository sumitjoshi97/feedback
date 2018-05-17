import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import materializeCSS from 'materialize-css/dist/css/materialize.min.css';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

import thunk from 'redux-thunk';
import reducers from './store/reducers/index';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, applyMiddleware(thunk))

const app = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
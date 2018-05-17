import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {createStore, applyMiddleware} from 'redux';
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(() => [], {}, applyMiddleware)

const app = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
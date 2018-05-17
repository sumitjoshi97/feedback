import React from 'react';

// importing react router
import {Route, Switch} from 'react-router-dom';

// importing component
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Survey from './Survey';

const App = () => (
    <div>
        <Header/>
        <Switch>
            <Route path='/' component={Landing}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/survey' component={Survey}/>
        </Switch>
    </div>
)

export default App;

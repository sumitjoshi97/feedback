import React, {Component} from 'react';

// importing react router
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

// importing component
import Header from './Header/Header';
import Landing from '../components/Landing/Landing';
import Dashboard from '../components/Dashboard/Dashboard';
import SurveyNew from './Surveys/SurveyNew/SurveyNew';
import Survey from './Surveys/SurveyList/Survey/Survey';

// import Survey from './Survey';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';

import ReallySmoothScroll from 'really-smooth-scroll';
ReallySmoothScroll.shim();

class App extends Component {

    componentDidMount = () => {
        this.props.onFetchUser();
    }

    render() {
        return (
            <div >
                <Router>
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={Landing}/>
                            <Route path="/surveys/new" component={SurveyNew}/>
                            <Route path="/surveys/survey" component={Survey} />
                            <Route exact path="/surveys" component={Dashboard}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchUser: () => dispatch(actions.fetchApi())
    }
}

export default connect(null, mapDispatchToProps)(App);
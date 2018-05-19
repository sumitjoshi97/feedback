import React, {Component} from 'react';

// importing react router
import {Route, Switch} from 'react-router-dom';

// importing component
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './SurveyNew/SurveyNew'; 
// import Survey from './Survey';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';

// const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {

    componentDidMount = () => {
        this.props.onFetchUser();
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/surveys/new" exact component={SurveyNew} />
                    <Route exact path="/surveys" component={Dashboard} />
                    
                </Switch>
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

// export default connect(null, actions)(App);
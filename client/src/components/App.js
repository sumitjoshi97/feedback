import React, {Component} from 'react';

// importing react router
import {Route, Switch} from 'react-router-dom';

// importing component
import Header from './Header';
// import Landing from './Landing'; import Dashboard from './Dashboard'; import
// Survey from './Survey';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';

class App extends Component {

    conmponentDidMount() {
        this.props.onFetchUsers();
    }

    render() {
        return (
            <div className="container">
                <Header/>
                {/* <Switch>
                    <Route path='/dashboard' component={Dashboard}/>
                <Route path='/survey' component={Survey}/>
                <Route path='/' exact component={Landing}/>
                </Switch> */}
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {

//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: () => dispatch(actions.fetchApi())
    }
}

export default connect(null, mapDispatchToProps)(App);

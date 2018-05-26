import React, {Component} from 'react'
import {connect} from 'react-redux';

import * as actions from '../../../store/actions/index';

class SurveyList extends Component {

    componentDidMount = () =>{
        this.props.onFetchSurveys();
    }

    renderSurveys = () => {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card " key={survey._id}>
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <p>
                            {survey.body}
                        </p>
                        <p className="right">
                            Sent on: <span>{new Date(survey.dateSent).toLocaleDateString()}</span>
                        </p>
                    </div>
                    <div className="action">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                Surveys
                {this.renderSurveys()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        surveys: state.surveys.surveys
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchSurveys: () => dispatch(actions.fetchSurveysApi())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);
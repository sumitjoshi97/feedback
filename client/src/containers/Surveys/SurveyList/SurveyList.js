import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../../../store/actions/index';
import './SurveyList.css';

class SurveyList extends Component {

    componentDidMount = () => {
        this.props.onFetchSurveys();
    }

    handleSurveyClick = survey => {
        this.props.onSetCurrentSurvey(survey)
        
        this.props.history.push('/surveys/survey')
    }
    renderSurveys = () => {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="survey" key={survey._id} onClick={() => this.handleSurveyClick(survey)}>
                    <div className="survey__content">
                        <span className="survey__heading">{survey.title}</span>
                        <p>{survey.body}</p>
                        <p className="survey__date">Sent on: <span>{new Date(survey.dateSent).toLocaleDateString()}</span></p>
                    </div>
                    <div className="survey__actions">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="surveys">
                <h2 className="surveys-heading">Your Surveys</h2>
                <div className="surveyList">
                    {this.renderSurveys()}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        surveys: state.surveys.surveys,
        currentSurvey: state.surveys.currentSurvey
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchSurveys: () => dispatch(actions.fetchSurveysApi()),
        onSetCurrentSurvey: (survey) => dispatch(actions.setCurrentSurvey(survey))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SurveyList));
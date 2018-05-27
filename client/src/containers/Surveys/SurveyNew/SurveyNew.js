import React, {Component} from 'react'
import {reduxForm} from 'redux-form';

import SurveyForm from '../SurveyForm/SurveyForm';
import SurveyFormReview from '../SurveyFormReview/SurveyFormReview';
import './SurveyNew.css';

class SurveyNew extends Component {
    state = {
        showFormReview: false
    }

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview 
                onCancel={() => this.setState({showFormReview: false})}/>
        }

        return <SurveyForm 
            onSurveySubmit={() => this.setState({showFormReview: true})}/>
    }

    render() {
        return (
            <div className="survey-form">
            <h2 className="surveys-heading">New Survey</h2>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({form: 'surveyForm'})(SurveyNew);

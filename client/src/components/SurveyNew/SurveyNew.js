import React, {Component} from 'react'
import SurveyForm from './SurveyForm/SurveyForm';
import SurveyFormReview from './SurveyForm/SurveyFormReview/SurveyFormReview';

export default class SurveyNew extends Component {
    state = {
        showFormReview: false
    }

    renderContent() {
        if(this.state.showFormReview) {
            return <SurveyFormReview />
        }

        return <SurveyForm
            onSurveySubmit={() => this.setState({showFormReview: true})}/>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

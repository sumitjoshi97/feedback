import React from 'react'
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';

const SurveyFormReview = (props) => {
    // console.log(props.formValues)
    return (
        <div>
            <h5>Plese confirm </h5>
            <div>
                <div>
                    <label>Survey Title</label>
                    <div>{props.formValues.title}</div>
                </div>
                <div>
                    <label>Subject</label>
                    <div>{props.formValues.subject}</div>
                </div>
                <div>
                    <label>Body</label>
                    <div>{props.formValues.body}</div>
                </div>
                <div>
                    <label>Recipients</label>
                    <div>{props.formValues.recipients}</div>
                </div>
            </div>
            <button 
                type="cancel"
                className="yellow darken-3 btn-flat" 
                >
                Back
            </button>
            <button className="green btn-flat right" onClick={() => props.onSubmitSurvey(formValues)}>Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        formValues: state.form.surveyForm.values
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onSubmitSurvey: () => dispatch(actions.submitSurvey(props.formValues))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SurveyFormReview);
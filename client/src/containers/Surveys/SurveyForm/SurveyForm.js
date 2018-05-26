import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import SurveyField from '../../../components/SurveyField/SurveyField';
import validateEmails from '../../../utils/validateEmails';


const FIELDS = [
    {label: 'Survey Title', name: 'title'},
    {label: 'Subject', name: 'subject'},
    {label: 'Body', name: 'body'},
    {label: 'Recipients', name: 'recipients'}
]

class SurveyForm extends Component {

    renderFields = () => {
        return _.map(FIELDS,({label, name}, index)=> {
            return <Field key={index} component={SurveyField} type="text" label={label} name={name} />
        })        
    }


    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                <Link to="/surveys" className="btn-flat red">Cancel</Link>
                <button type="submit" className="teal right btn-flat">Next<i className="material-icons right">done</i>  </button>
                </form>
            </div>
            
        )
    }
}

function validate (values) {
    const errors = {};

    _.each(FIELDS, ({name}) => {
        if (!values[name]){
            errors[name]=`You must provide a ${name} value`;
        }
    })

    errors.recipients = validateEmails(values.recipients || '');

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
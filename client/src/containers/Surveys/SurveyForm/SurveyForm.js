import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import _ from 'lodash';

// importing files
import SurveyField from '../../../components/SurveyField/SurveyField';
import validateEmails from '../../../utils/validateEmails';
import formFields from '../../../utils/formFields';

import './SurveyForm.css';

class SurveyForm extends Component {
    renderFields = () => {
        return _.map(formFields,({label, name}, index)=> {
            return <Field key={index} component={SurveyField} type="text" label={label} name={name} />
        })        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} className="form">
                    {this.renderFields()}
                    <div className="row">
                        <Link to="/surveys" className="btn-cancel">Cancel</Link>
                    </div>
                
                    <button type="submit" className="btn-submit">Next</button>
                </form>
            </div>
        )
    }
}

function validate (values) {
    const errors = {};

    _.each(formFields, ({name}) => {
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
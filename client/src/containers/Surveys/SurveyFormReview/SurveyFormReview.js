// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom';

import formFields from '../../../utils/formFields';
import * as actions from '../../../store/actions/index';

import './SurveyFormReview.css';

const SurveyFormReview = (props) => {
  const reviewFields = _.map(formFields, ({name, label}) => {
    return (
      <div key={name}>
        <label className="form-label">{label}</label>
        <div className="form-value">
          {props.formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div className="form-review">
      <h3 className="heading-secondary">Please confirm your entries</h3>
      {reviewFields}
      <button className="btn-cancel" onClick={props.onCancel}>
        Back
      </button>
      <button
        onClick={() => props.onSubmitSurvey(props.formValues, props.history)}
        className="btn-submit">
        Send Survey
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {formValues: state.form.surveyForm.values};
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitSurvey: (values, history) => dispatch(actions.submitSurvey(values, history))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SurveyFormReview));

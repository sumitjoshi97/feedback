import React from 'react';

import './SurveyField.css';

const SurveyField = ({input, label, meta: {error, touched}}) => (
    <div className="form-field">
        <label className="form-label">{label}</label>
        <input {...input} className="form-input"/>
        <span style={{color: 'red', fontSize: '10px', marginTop: '-40px'}}>{touched ? error : null}</span>
    </div>
);

export default SurveyField;
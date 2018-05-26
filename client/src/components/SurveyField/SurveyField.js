import React from 'react';


const SurveyField = ({input, label, meta: {error, touched}}) => (
    <div>
        <label>{label}</label>
        <input {...input}/>
        <span style={{color: 'red', fontSize: '10px', marginTop: '-40px'}}>{touched ? error : null}</span>
    </div>
);

export default SurveyField;
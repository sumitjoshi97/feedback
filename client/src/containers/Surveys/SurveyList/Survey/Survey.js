import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './Survey.css'
import Graph from './Graph/Graph'

const Survey = props => (
  !props.currentSurvey ? <Redirect to="/surveys" /> :
    (<div className="survey-summary">
      <h1 className="text-primary">
        <span className="text-secondary m-2">Title</span>{props.currentSurvey.title}
      </h1>

      <p className="text-secondary survey-body">
        {props.currentSurvey.body}
      </p>

      <div className="survey-recipients">
      <h2 className="text-secondary m-2">Recipients </h2>
      <ul className="survey-recipients-list">
        {props.currentSurvey.recipients.map(recipient => <li className="survey-recipient">{recipient.email}</li>)}
      </ul>
      </div>
      

      <div className="survey-sent">
        <h2 className="text-secondary m-2">Date sent </h2>
        {new Date(props.currentSurvey.dateSent).toLocaleDateString()}
      </div>

      <div className="survey-response">
        <h2 className="text-secondary">Result</h2>
        <div> 
          <Graph yes={props.currentSurvey.yes} no={props.currentSurvey.no}/>
        </div>
        
      </div>
      
    </div>)
)

const mapStateToProps = state => {
  return {
    currentSurvey: state.surveys.currentSurvey
  }
}

export default connect(mapStateToProps)(Survey)
import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './Survey.css'
import Graph from './Graph/Graph'

const Survey = props => (
  !props.currentSurvey ? <Redirect to="/surveys" /> :
    (<div className="survey-summary">      
        <span className="text-secondary m-2">Survey</span>{props.currentSurvey.title}

      <p className="survey-body">
        <span className="text-secondary m-2">Description</span> {props.currentSurvey.body}
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
        <div className="graph">
          <Graph yes={props.currentSurvey.yes} no={props.currentSurvey.no} />
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
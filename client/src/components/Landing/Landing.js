import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import './Landing.css';
import landingImg from '../../assets/img/feedback-large.jpeg';

const Landing = (props) => {

    return (
        <div className="landing">
            <div className="landing-content">
                <h1 className="landing-content__heading">
                    Emaily
                </h1>
                <div className="landing-content__text">
                    <p className="landing-content__para">
                        Collect feedback from your users
                    </p>
                    <ul className="landing-content__list">
                        <li>
                            Create surveys
                        </li>
                        <li>
                            Send surveys via email
                        </li>
                        <li>
                            Check surveys
                        </li>
                        <li>
                            Delete surveys
                        </li>
                    </ul>
                </div>

                {props.auth ? <Link to="/surveys" className="btn-inline">Surveys</Link> : <a className="btn-inline" href="/auth/google">Login</a>}
            </div>

            <img src={landingImg} alt="landing" className="landing-image"/>

        </div>
    )
}

const mapStateToProps = state => {
    return {auth: state.auth.auth}
}

export default connect(mapStateToProps)(Landing);
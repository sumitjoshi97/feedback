import React from 'react';

import './Landing.css';
import landingImg from '../../assets/img/feedback-large.jpeg';

const Landing = (props) => (
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

        </div>

        <img src={landingImg} alt="landing-image" className="landing-image"/>

    </div>
)

export default Landing;
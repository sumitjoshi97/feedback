import React from 'react';
import {Link} from 'react-router-dom';

import SurveyList from '../../containers/Surveys/SurveyList/SurveyList';
import './Dashboard.css';
import AddSvg from '../../assets/svg/add-song.svg'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <SurveyList/>

            <Link to="/surveys/new" className="btn-fixed">
                {/* <svg class="side-nav__icon">
                    {AddSvg}
                </svg> */}
                <img src={AddSvg} alt=""/>
            </Link>
        </div>
    )
}

export default Dashboard;
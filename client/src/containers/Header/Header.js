import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Payments from "../Payments/Payments";
import './Header.css';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return <li className="header-nav__link nothing">nothing</li>
            case false:
                return <li className="header-nav__link">
                            <a className="link" href="/auth/google">Login With Google</a>
                        </li>;
            default:
                return (
                    <div className="header-nav__items">
                        <li className="header-nav__link"><Payments/></li>
                        <li className="header-nav__link">
                            Credits: {this.props.auth.credits}
                        </li>
                        <li className="header-nav__link">
                            <a className="link" href="/api/logout">Logout</a>
                        </li>
                    </div>
                )
        }
    }

    render() {
        return (
            <nav className="nav">
                <div className="header">
                    <Link to="/" className="header-logo">
                        Emaily
                    </Link>
                    <ul className="header-nav">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {auth: state.auth.auth}
}

export default connect(mapStateToProps)(Header);
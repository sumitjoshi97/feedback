import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Payments from "../Payments/Payments";

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return <li>nothing</li>
            case false:
                return <li>
                    <a href="/auth/google">Login With Google</a>
                </li>;
            default:
                return (
                    <div>
                        <li><Payments/></li>
                        <li>
                            Credits: {this.props.auth.credits}
                        </li>
                        <li>
                            <a href="/api/logout">Logout</a>
                        </li>
                    </div>

                )

        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth
                        ? '/surveys'
                        : '/'}
                        className="left brand-logo">
                        Emaily
                    </Link>
                    <ul className="right">
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

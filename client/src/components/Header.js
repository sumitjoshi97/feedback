import React from 'react';

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a className="left brand-logo">Emaily</a>
                <ul className="right">
                    <li>
                        <a href="/auth/google/">Login with Google</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
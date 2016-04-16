import React, { Component } from 'react'

class Header extends Component {
    render() {
        let sessionMessage = null;

        if(this.props.isLoggedIn && this.props.user) {
            sessionMessage = <p className="navbar-text">
                Signed in as {this.props.user.get('name')}
            </p>;
        }

        return <nav className="navbar navbar-fixed-top navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Stickr</a>
                    {sessionMessage}
                </div>
            </div>
        </nav>
    }
}

Header.propTypes = {
    isLoggedIn: React.PropTypes.bool.isRequired,
    user: React.PropTypes.object
};

export default Header;
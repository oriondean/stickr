import React, { Component } from 'react'

class Header extends Component {
    render() {
        let sessionMessage = null;

        if(this.props.isLoggedIn && this.props.user) {
            sessionMessage = <span>
                    <ul className="nav navbar-nav">
                        <li><a onClick={this.props.viewHome}>Home</a></li>
                        <li><a onClick={this.props.viewFriends}>Friends</a></li>
                    </ul>
                    <span className="navbar-text">
                        Signed in as {this.props.user.get('name')}
                    </span>
                </span>;
        }

        return <nav className="navbar navbar-fixed-top navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Stickr</a>
                </div>
                {sessionMessage}
            </div>
        </nav>
    }
}

Header.propTypes = {
    isLoggedIn: React.PropTypes.bool.isRequired,
    user: React.PropTypes.object,
    viewHome: React.PropTypes.func,
    viewFriends: React.PropTypes.func
};

export default Header;
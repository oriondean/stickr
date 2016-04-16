import * as ActionCreators from '../../actions/index';
import * as API from '../../constants/api';

import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import Header from '../../components/header/header';
import React from 'react';

import './login.scss';

class Login extends React.Component {
    render() {
        let errorMessage = null;

        if(this.props.hasLoginFailed) {
            errorMessage = <div className="errorMessage">
                {this.props.loginFailureReason.get('errorMessage')}
            </div>
        }
        
        return <div className="login">
            <Header isLoggedIn={this.props.isLoggedIn} />
            <h1>Welcome to the future of sticker trading.</h1>
            <br />
            <FacebookLogin appId="756224587812420" icon="fa-facebook" callback={(response) => this.onResponse(response)}/>
            {errorMessage}
        </div>;
    }

    onResponse(data) {
        if (data.accessToken && data.name && data.id) {
            const request = new XMLHttpRequest();
            request.open(API.LOGIN.method, API.LOGIN.getAddress(), true);
            request.setRequestHeader('Content-Type', 'application/json');

            request.onload = () => {
                const response = JSON.parse(request.response);
                const isSuccess = response.id != null && response.facebookId != null && response.name != null;
                isSuccess ? this.props.loginSuccess(response) : this.props.loginFailure(response);
            };

            request.onerror = () => {
                const errorMessage = 'There was a problem connecting to the server. Please try again later.';
                this.props.loginFailure({error: -1, errorMessage: errorMessage});
            };

            request.send(JSON.stringify({token: data.accessToken}));
        }
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.authentication.get('isLoggedIn'),
        hasLoginFailed: state.authentication.get('hasLoginFailed'),
        loginFailureReason: state.authentication.get('loginFailureReason'),
        user: state.authentication.get('user')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginSuccess: user => dispatch(ActionCreators.loginSuccess(user)),
        loginFailure: error => dispatch(ActionCreators.loginFailure(error))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
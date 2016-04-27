import React from 'react';
import { render } from 'react-dom';
import configureStore from '../../store/store';
import { Provider } from 'react-redux';

import Home from '../home/home';
import Login from '../login/login';
import Friends from '../friends/friends';

const store = configureStore();

export default class App extends React.Component {
    render() {
        if(!this.props.isLoggedIn) {
            window.location.hash = '';
            return <Login />
        }

        switch (this.props.location[0])  {
            case 'friends':
                return <Friends />;
            default:
                return <Home />;
        }
    }

    static handleNewHash() {
        const location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');

        const application = <Provider store={store}>
                <App location={location} isLoggedIn={store.getState().authentication.get('isLoggedIn')} />
            </Provider>;

        render(application, document.getElementById('root'));
    }
}

App.propTypes = {
    location: React.PropTypes.array.isRequired,
    isLoggedIn: React.PropTypes.bool.isRequired
};
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './containers/app/app';
import Login from './containers/login/login'
import configureStore from './store/store';

import './index.scss';
import '../styles/bootstrap/css/bootstrap.css';
import '../styles/bootstrap/css/bootstrap-theme.css';

var store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="app" component={Login} />
            <Route path="home" components={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
import App from './containers/app/app';

import './index.scss';
import '../styles/bootstrap/css/bootstrap.css';
import '../styles/bootstrap/css/bootstrap-theme.css';

import '../index.html';

// Handle the initial route and browser navigation events
window.addEventListener('hashchange', App.handleNewHash, false);
App.handleNewHash();
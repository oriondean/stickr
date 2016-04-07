import { connect } from 'react-redux';
import React from 'react';

// Components
import Header from '../components/header/header';

class App extends React.Component {
    render() {
        return <div className="app">
            <Header />
            <h1>Hello World</h1>
        </div>
    }
}

export default connect(
    () => { return {}; },
    () => { return {}; }
)(App);
import * as ActionCreators from '../../actions/index';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import React from 'react';

import './app.scss';

class App extends React.Component {
    render() {
        //TODO: update site url when it is hosted externally
        return <div className="app">
            <Header isLoggedIn={this.props.isLoggedIn} user={this.props.user} />
            <h1>App!</h1>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        stickers: state.stickers,
        isLoggedIn: state.authentication.get('isLoggedIn'),
        user: state.authentication.get('user')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        incrementStickerCount: stickerNumber => dispatch(ActionCreators.incrementStickerCount(stickerNumber)),
        decrementStickerCount: stickerNumber => dispatch(ActionCreators.decrementStickerCount(stickerNumber))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
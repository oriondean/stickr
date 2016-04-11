import * as ActionCreators from '../actions/index';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import React from 'react';

import './app.scss';

// Components

class App extends React.Component {
    render() {
        const callback = response => console.log('response', response);

        //TODO: update site url when it is hosted externally
        return <div className="app">
            <FacebookLogin
                appId="756224587812420"
                icon="fa-facebook"
                callback={callback}/>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        stickers: state.stickers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        incrementStickerCount: stickerNumber => dispatch(ActionCreators.incrementStickerCount(stickerNumber)),
        decrementStickerCount: stickerNumber => dispatch(ActionCreators.decrementStickerCount(stickerNumber))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
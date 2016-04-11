import * as ActionCreators from '../actions/index';
import { connect } from 'react-redux';
import React from 'react';

import './app.scss';

// Components
import Header from '../components/header/header';
import StickerList from '../components/sticker-list/sticker-list';

class App extends React.Component {
    render() {
        return <div className="app">
            <Header />
            <StickerList stickers={this.props.stickers}
                         increment={this.props.incrementStickerCount}
                         decrement={this.props.decrementStickerCount} />
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
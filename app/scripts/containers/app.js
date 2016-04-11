import * as ActionCreators from '../actions/index';
import { connect } from 'react-redux';
import React from 'react';

import './app.scss';

// Components
import Header from '../components/header/header';
import StickerCard from '../components/sticker-card/sticker-card';

class App extends React.Component {
    render() {
        const sticker = this.props.stickers.get('15');

        return <div className="app">
            <Header />
            <h1>Hello World</h1>
            <StickerCard name={sticker.get('name')} count={sticker.get('count')} number={sticker.get('number')}
                         increment={this.props.incrementStickerCount} decrement={this.props.decrementStickerCount} />
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
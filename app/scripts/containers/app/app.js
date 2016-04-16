import * as ActionCreators from '../../actions/index';
import { connect } from 'react-redux';
import { DEFAULT_SET_ID } from '../../constants/sets';
import Header from '../../components/header/header';
import React from 'react';
import StickerCardList from '../../components/sticker-card-list/sticker-card-list';

import './app.scss';

class App extends React.Component {
    render() {
        const stickers = this.props.stickers.get(DEFAULT_SET_ID);

        const groups = [];

        if(stickers != null && !stickers.isEmpty()) {
            let previousGrouping = stickers.first().get('item').get('grouping');
            let previousIndex = 0;

            stickers.forEach((sticker, index) => {
                const item = sticker.get('item');
                const grouping = item.get('grouping');

                if (grouping !== previousGrouping || index === (stickers.size - 1)) {
                    groups.push(<div className="stickerGroup" key={previousGrouping}>
                        <h2>{previousGrouping}</h2>
                        <StickerCardList stickers={stickers.slice(previousIndex, index)}
                                         increment={this.props.incrementStickerCount}
                                         decrement={this.props.decrementStickerCount}
                        />
                    </div>);

                    previousGrouping = grouping;
                    previousIndex = index;
                }
            });
        }

        return <div className="app">
            <Header isLoggedIn={this.props.isLoggedIn} user={this.props.user} />
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10">
                            <h1>My Stickers</h1>
                            {groups}
                        </div>
                        <div className="col-lg-2">
                            <h1>Friends List</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    componentWillMount() {
        this.props.getStickersBySetId(DEFAULT_SET_ID);
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
        decrementStickerCount: stickerNumber => dispatch(ActionCreators.decrementStickerCount(stickerNumber)),
        getStickersBySetId: setId => dispatch(ActionCreators.getStickersBySetId(setId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
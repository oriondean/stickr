import * as ActionCreators from '../../actions/index';
import { connect } from 'react-redux';
import { DEFAULT_SET_ID } from '../../constants/sets';
import Header from '../../components/header/header';
import React from 'react';
import StickerCardList from '../../components/sticker-card-list/sticker-card-list';

import './home.scss';

class Home extends React.Component {
    render() {
        const stickers = this.props.stickerSets.get(DEFAULT_SET_ID);
        let stickerGroupElements;

        if(stickers != null && !stickers.isEmpty()) {
            const stickerGroups = stickers.sortBy(sticker => sticker.get('item').get('number'))
                .groupBy(sticker => sticker.get('item').get('grouping'));
            stickerGroupElements = stickerGroups.valueSeq().map(group => {
                const grouping = group.first().get('item').get('grouping');
                return <div className="stickerGroup" key={grouping}>
                    <h2>{Home.formatGroupName(grouping)}</h2>
                    <StickerCardList stickers={group}
                                     increment={this.props.incrementStickerCount}
                                     decrement={this.props.decrementStickerCount} />
                </div>
            });
        }

        return <div className="app">
            <Header isLoggedIn={this.props.isLoggedIn} user={this.props.user} />
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10">
                            <h1>My Stickers</h1>
                            {stickerGroupElements}
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

    static formatGroupName(groupName) {
        return groupName.split(' ').map(name => name.substr(0, 1).toUpperCase() + name.substr(1)).join(' ');
    }
}

const mapStateToProps = state => {
    return {
        stickerSets: state.stickers,
        isLoggedIn: state.authentication.get('isLoggedIn'),
        user: state.authentication.get('user')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        incrementStickerCount: (setId, stickerNumber, count) => dispatch(ActionCreators.updateStickerCount(setId, stickerNumber, ++count)),
        decrementStickerCount: (setId, stickerNumber, count) => dispatch(ActionCreators.updateStickerCount(setId, stickerNumber, --count)),
        getStickersBySetId: setId => dispatch(ActionCreators.getStickersBySetId(setId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
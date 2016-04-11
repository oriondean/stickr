import React, { Component } from 'react'
import StickerCard from '../sticker-card/sticker-card';

import './sticker-card-list.scss';

class StickerCardList extends Component {
    render() {
        const stickers = this.props.stickers.map(sticker => {
            return <StickerCard name={sticker.get('name')}
                                count={sticker.get('count')}
                                number={sticker.get('number')}
                                key={sticker.get('name')}
                                increment={this.props.increment}
                                decrement={this.props.decrement} />
        }).toArray();

        return <div className="sticker-list">{stickers}</div>;
    }
}

StickerCardList.propTypes = {
    stickers: React.PropTypes.object.isRequired,
    increment: React.PropTypes.func.isRequired,
    decrement: React.PropTypes.func.isRequired
};

export default StickerCardList;
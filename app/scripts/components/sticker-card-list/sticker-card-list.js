import React, { Component } from 'react'
import StickerCard from '../sticker-card/sticker-card';

import './sticker-card-list.scss';

class StickerCardList extends Component {
    render() {
        const stickers = this.props.stickers.map(sticker => {
            const item = sticker.get('item');
            return <StickerCard name={StickerCardList.formatName(item.get('name'))}
                                count={item.get('count') || 0}
                                number={item.get('number')}
                                key={item.get('name')}
                                increment={this.props.increment}
                                decrement={this.props.decrement} />
        }).toArray();

        return <div className="sticker-list">{stickers}</div>;
    }

    static formatName(stickerName) {
        const names = stickerName.trim().split('/');

        return names.map(name => {
            const subNames = name.split(' ');

            return subNames.map(subName => {
                return subName.substr(0, 1).toUpperCase() + subName.substr(1);
            }).join(' ');
        }).join('/');
    }
}

StickerCardList.propTypes = {
    stickers: React.PropTypes.object.isRequired,
    increment: React.PropTypes.func.isRequired,
    decrement: React.PropTypes.func.isRequired
};

export default StickerCardList;
import React, { Component } from 'react'

import './sticker-card.scss';

class StickerCard extends Component {
    render() {
        return (
            <div className="sticker-card">
                <div className="header">
                    <button type="button" className="button button-increment" onClick={() => this.onIncrementClicked()}>
                        <span className="glyphicon glyphicon-plus" />
                    </button>
                    <div className="status">{this.getStatus()}</div>
                    <button type="button" className="button button-decrement" onClick={() => this.onDecrementClicked()}>
                        <span className="glyphicon glyphicon-minus" />
                    </button>
                </div>
                <div className="picture">
                    <div className="number">{this.props.number}</div>
                </div>
                <div className="summary">
                    <span className="name">{this.props.name}</span>
                </div>
            </div>
        )
    }

    onIncrementClicked() {
        this.props.increment(this.props.number);
    }

    onDecrementClicked() {
        if(this.props.count > 0) {
            this.props.decrement(this.props.number);
        }
    }

    getStatus() {
        if (this.props.count === 0) return 'NEED';
        if (this.props.count === 1) return 'GOT';
        if (this.props.count === 2) return 'DUPE';

        return 'DUPE x' + String(this.props.count - 1);
    }
}

// TODO: prop validation (positive count, positive id, name.length > 0)
StickerCard.propTypes = {
    name: React.PropTypes.string.isRequired,
    count: React.PropTypes.number.isRequired,
    number: React.PropTypes.number.isRequired,
    increment: React.PropTypes.func.isRequired,
    decrement: React.PropTypes.func.isRequired
};

export default StickerCard;
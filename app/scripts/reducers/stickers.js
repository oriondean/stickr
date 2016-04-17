import Immutable from 'immutable';
import {STICKER_ACTIONS} from '../constants/action-types';

// List of stickers, mapped by their set
const initialState = Immutable.Map();

export default function reduce(state = initialState, action) {
    switch(action.type) {
        case STICKER_ACTIONS.UPDATE_STICKERS: {
            const stickersByNumber = action.stickers.reduce((map, sticker) => {
                map[String(sticker.item.number)] = sticker;
                return map;
            }, {});

            return state.set(String(action.setId), Immutable.fromJS(stickersByNumber));
        }
        case STICKER_ACTIONS.UPDATE_COUNT:
            return state.get(String(action.setId)).get(action.stickerNumber).get('item').set('count', action.count);
        default:
            return state;
    }
}
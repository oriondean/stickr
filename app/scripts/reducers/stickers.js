import Immutable from 'immutable';
import {STICKER_ACTIONS} from '../constants/action-types';

// List of stickers, mapped by their set
const initialState = Immutable.Map();

export default function reduce(state = initialState, action) {
    switch(action.type) {
        case STICKER_ACTIONS.UPDATE_STICKERS: {
            return state.set(String(action.setId), Immutable.fromJS(action.stickers));
        }
        case STICKER_ACTIONS.INCREMENT_COUNT: {
            const sticker = state.get(action.stickerNumber);
            return state.set(action.stickerNumber, sticker.set('count', sticker.get('count') + 1));
        }
        case STICKER_ACTIONS.DECREMENT_COUNT: {
            const sticker = state.get(action.stickerNumber);

            if(sticker.get('count') === 0) {
                throw new Error('A sticker cannot have a count less than zero');
            }

            return state.set(action.stickerNumber, sticker.set('count', sticker.get('count') - 1));
        }
        default:
            return state;
    }
}
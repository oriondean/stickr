import Immutable from 'immutable';
import {STICKER_ACTIONS} from '../constants/action-types';

const initialState = Immutable.fromJS({
    '15': { number: '15', count: 0, name: 'Jamie Vardy' },
    '17': { number: '17', count: 1, name: 'Wade Ronney' }
});

export default function reduce(state = initialState, action) {
    switch(action.type) {
        case STICKER_ACTIONS.INCREMENT_COUNT:
        {
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
import Immutable from 'immutable';
import {FRIEND_ACTIONS} from '../constants/action-types';

// List of stickers, mapped by their set
const initialState = Immutable.List();

export default function reduce(state = initialState, action) {
    switch(action.type) {
        case FRIEND_ACTIONS.UPDATE_FRIENDS: {
            return Immutable.List(action.friends);
        }
        default:
            return state;
    }
}

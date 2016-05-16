import Immutable from 'immutable';
import {FRIEND_REQUEST_ACTIONS} from '../constants/action-types';

// List of stickers, mapped by their set
const initialState = Immutable.List();

export default function reduce(state = initialState, action) {
    switch(action.type) {
        case FRIEND_REQUEST_ACTIONS.UPDATE_FRIEND_REQUESTS: {
            return Immutable.List(action.friendRequests);
        }
        default:
            return state;
    }
}

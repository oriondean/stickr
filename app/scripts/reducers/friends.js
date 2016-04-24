import Immutable from 'immutable';
import {FRIEND_ACTIONS} from '../constants/action-types';

// List of stickers, mapped by their set
const initialState = Immutable.Map();

export default function reduce(state = initialState, action) {
    switch(action.type) {
        case FRIEND_ACTIONS.UPDATE_FRIENDS: {
            const friendById = action.friends.reduce((map, friend) => {
                map[String(friend.id)] = friend;
                return map;
            }, {});

            return Immutable.fromJS(friendById);
        }
        default:
            return state;
    }
}

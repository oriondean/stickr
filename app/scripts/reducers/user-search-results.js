import Immutable from 'immutable';
import {USER_ACTIONS} from '../constants/action-types';

// List of stickers, mapped by their set
const initialState = Immutable.List();

export default function reduce(state = initialState, action) {
    switch(action.type) {
        case USER_ACTIONS.UPDATE_USER_SEARCH_RESULTS: {
            return Immutable.List(action.users);
        }
        default:
            return state;
    }
}

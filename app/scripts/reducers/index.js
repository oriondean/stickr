import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import authentication from './authentication'
import stickers from './stickers';
import friends from './friends';
import friendRequests from './friend-requests';
import userSearchResults from './user-search-results';

const rootReducer = combineReducers({
    authentication,
    friends,
    friendRequests,
    stickers,
    userSearchResults,
    routing: routerReducer
});

export default rootReducer;
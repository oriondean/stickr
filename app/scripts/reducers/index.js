import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import authentication from './authentication'
import stickers from './stickers';
import friends from './friends';

const rootReducer = combineReducers({
    authentication,
    friends,
    stickers,
    routing: routerReducer
});

export default rootReducer;
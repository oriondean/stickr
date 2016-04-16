import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import authentication from './authentication'
import stickers from './stickers';

const rootReducer = combineReducers({
    authentication,
    stickers,
    routing: routerReducer
});

export default rootReducer;
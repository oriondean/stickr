import Immutable from 'immutable';
import {AUTH_ACTIONS} from '../constants/action-types';

const initialState = Immutable.fromJS({
    isLoggedIn: false,
    hasLoginFailed: false,
    loginFailureReason: null,
    user: null}
);

export default function reduce(state = initialState, action) {
    switch(action.type) {
        case AUTH_ACTIONS.LOGIN_SUCCESS:
            return state.set('isLoggedIn', true)
                .set('hasLoginFailed', false)
                .set('loginFailureReason', null)
                .set('user', Immutable.fromJS(action.user));
        case AUTH_ACTIONS.LOGIN_FAILURE:
            return state.set('isLoggedIn', false)
                .set('hasLoginFailed', true)
                .set('loginFailureReason', Immutable.fromJS(action.error))
                .set('user', null);
        default:
            return state;
    }
}
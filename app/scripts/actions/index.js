import { push } from 'react-router-redux';
import {STICKER_ACTIONS, AUTH_ACTIONS} from '../constants/action-types';

export const incrementStickerCount = stickerNumber => {
    return dispatch => {
        dispatch({
            type: STICKER_ACTIONS.INCREMENT_COUNT,
            stickerNumber
        });
    };
};

export const decrementStickerCount = stickerNumber => {
    return dispatch => {
        dispatch({
            type: STICKER_ACTIONS.DECREMENT_COUNT,
            stickerNumber
        });
    };
};

export const loginSuccess = user => {
    return dispatch => {
        dispatch({
            type: AUTH_ACTIONS.LOGIN_SUCCESS,
            user
        });
        dispatch(push('home'));
    };
};

export const loginFailure = error => {
    return dispatch => {
        dispatch({
            type: AUTH_ACTIONS.LOGIN_FAILURE,
            error
        });
    };
};

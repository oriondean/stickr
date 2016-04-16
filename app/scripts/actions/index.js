import { push } from 'react-router-redux';
import * as API from '../constants/api';
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
        dispatch(push('/home'));
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

export const getStickersBySetId = setId => {
    return dispatch => {
        const request = new XMLHttpRequest();
        request.withCredentials = true;
        request.open(API.GET_USER_SET_ITEMS.method, API.GET_USER_SET_ITEMS.getAddress(setId), true);
        request.setRequestHeader('Content-Type', 'application/json');

        request.onload = () => {
            dispatch({
                type: STICKER_ACTIONS.UPDATE_STICKERS,
                setId,
                stickers: JSON.parse(request.response).results
            });
        };

        // TODO: nicely handle failure to retrieve stickers
        request.onerror = () => { console.error('Failed to retrieve stickers for set ' + setId); };

        request.send();
    };
};
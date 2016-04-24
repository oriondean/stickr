import { push } from 'react-router-redux';
import * as API from '../constants/api';
import {STICKER_ACTIONS, AUTH_ACTIONS, FRIEND_ACTIONS} from '../constants/action-types';

export const updateStickerCount = (setId, stickerNumber, count) => {
    return dispatch => {
        const request = new XMLHttpRequest();
        request.open(API.UPDATE_STICKER.method, API.UPDATE_STICKER.getAddress(setId, stickerNumber), true);
        request.setRequestHeader('Content-Type', 'application/json');

        request.onload = () => {
            const response = JSON.parse(request.response);

            if(response.errorCode != null || response.errorMessage != null) {
                console.error('Failed to update sticker count');
            } else {
                dispatch({
                    type: STICKER_ACTIONS.UPDATE_COUNT,
                    setId,
                    stickerNumber,
                    count
                });
            }
        };

        // TODO: nicely handle failure to update sticker count
        request.onerror = () => { console.error('Failed to update sticker count'); };

        request.send(JSON.stringify({count: count}));
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

export const viewFriends = () => {
    return dispatch => {
        dispatch(push('/friends'));
    };
};

export const viewHome = () => {
    return dispatch => {
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

export const getFriends = () => {
    return dispatch => {
        const request = new XMLHttpRequest();
        request.open(API.GET_USER_SET_ITEMS.method, API.GET_FRIENDS.getAddress(), true);
        request.setRequestHeader('Content-Type', 'application/json');

        request.onload = () => {
            dispatch({
                type: FRIEND_ACTIONS.UPDATE_FRIENDS,
                friends: JSON.parse(request.response).results
            });
        };

        // TODO: nicely handle failure to retrieve stickers
        request.onerror = () => { console.error('Failed to retrieve friends'); };

        request.send();
    };
};
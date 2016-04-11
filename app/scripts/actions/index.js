import {STICKER_ACTIONS} from '../constants/action-types';

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
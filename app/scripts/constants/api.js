import {SERVER_ADDRESS} from './config';

export const LOGIN = {
    method: 'POST',
    getAddress: () => SERVER_ADDRESS + '/login'
};

export const GET_USER_SET_ITEMS = {
    method: 'GET',
    getAddress: setId => SERVER_ADDRESS + '/users/sets/' + setId + '/items'
};

export const UPDATE_STICKER = {
    method: 'POST',
    getAddress: (setId, stickerNumber) => SERVER_ADDRESS + '/users/sets/' + setId + '/items/' + stickerNumber
};
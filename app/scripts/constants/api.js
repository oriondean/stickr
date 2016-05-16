import {SERVER_ADDRESS} from './config';

export const LOGIN = {
    method: 'POST',
    getAddress: () => SERVER_ADDRESS + '/login'
};

export const GET_USER_SET_ITEMS = {
    method: 'GET',
    getAddress: setId => SERVER_ADDRESS + '/sets/' + setId + '/items'
};

export const UPDATE_STICKER = {
    method: 'POST',
    getAddress: (setId, stickerNumber) => SERVER_ADDRESS + '/sets/' + setId + '/items/' + stickerNumber
};

export const GET_FRIENDS = {
    method: 'GET',
    getAddress: () => SERVER_ADDRESS + '/friends'
};

export const GET_FRIENDS_REQUESTS = {
    method: 'GET',
    getAddress: () => SERVER_ADDRESS + '/friendrequests'
};

export const SEARCH_USERS_BY_NAME = {
    method: 'GET',
    getAddress: name => SERVER_ADDRESS + '/users/search?name=' + name
};

export const SEND_FRIEND_REQUEST = {
    method: 'POST',
    getAddress: userId => SERVER_ADDRESS + '/friendrequests/' + userId
};

export const RESPOND_TO_FRIEND_REQUEST = {
    method: 'PUT',
    getAddress: userId => SERVER_ADDRESS + '/friendrequests/' + userId
};
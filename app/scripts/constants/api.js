//TODO: update site url when it is hosted externally
const PROTOCOL = 'http';
const HOST = '163.172.138.50';
const PORT = '3000';
const ADDRESS = PROTOCOL + '://' + HOST + ':' + PORT;

export const LOGIN = {
    method: 'POST',
    getAddress: () => ADDRESS + '/login'
};

export const GET_USER_SET_ITEMS = {
    method: 'GET',
    getAddress: setId => ADDRESS + '/sets/' + setId + '/items'
};

export const UPDATE_STICKER = {
    method: 'POST',
    getAddress: (setId, stickerNumber) => ADDRESS + '/sets/' + setId + '/items/' + stickerNumber
};

export const GET_FRIENDS = {
    method: 'GET',
    getAddress: () => ADDRESS + '/friends'
};

export const GET_FRIENDS_REQUESTS = {
    method: 'GET',
    getAddress: () => ADDRESS + '/friendrequests'
};

export const SEARCH_USERS_BY_NAME = {
    method: 'GET',
    getAddress: name => ADDRESS + '/users/search?name=' + name
};

export const SEND_FRIEND_REQUEST = {
    method: 'POST',
    getAddress: userId => ADDRESS + '/friendrequests/' + userId
};

export const RESPOND_TO_FRIEND_REQUEST = {
    method: 'PUT',
    getAddress: userId => ADDRESS + '/friendrequests/' + userId
};
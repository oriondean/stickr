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
    getAddress: () => ADDRESS + '/users/friends/'
};
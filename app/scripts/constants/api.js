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
    getAddress: setId => ADDRESS + '/user/set/' + setId + '/items'
};
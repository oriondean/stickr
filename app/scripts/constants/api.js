const PROTOCOL = 'http';
const HOST = '163.172.138.50';
const PORT = '3000';
const ADDRESS = PROTOCOL + '://' + HOST + ':' + PORT + '/';   

export const LOGIN = {
    METHOD: 'POST',
    ADDRESS: ADDRESS + 'login'
};
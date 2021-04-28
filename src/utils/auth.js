import Cookies from 'js-cookie';

const TokenKey = 'Admin-Token'


//获取token
export function getToken() {
    // return 'admin-token'
    return Cookies.get(TokenKey)
}

//设置token
export function setToken(value) {
    return Cookies.set(TokenKey, value)
}

//清除token
export function removeToken() {
    Cookies.remove(TokenKey)
}
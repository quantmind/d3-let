import {ostring} from './consts';


export function isObject (value) {
    return ostring.call(value) === '[object Object]';
}


export function isString (value) {
    return ostring.call(value) === '[object String]';
}


export function isFunction (value) {
    return ostring.call(value) === '[object Function]';
}


export function isArray (value) {
    return ostring.call(value) === '[object Array]';
}


export function isDate (value) {
    return ostring.call(value) === '[object Date]';
}


export function isNumber (value) {
    return ostring.call(value) === '[object Number]';
}

export function isError (value) {
    return ostring.call(value) === '[object Error]';
}

export function isPromise (value) {
    return ostring.call(value) === '[object Promise]';
}

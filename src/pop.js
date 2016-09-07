import {isObject, isArray} from './inspect';

export default function (obj, prop) {
    let value;
    if (isObject(obj)) {
        value = obj[prop];
        delete obj[prop];
        return value;
    } else if (isArray(obj)) {
        var index = +prop;
        if (index === index) return obj.splice(index, 1)[0];
        value = obj[prop];
        delete obj[prop];
        return value;
    }
}

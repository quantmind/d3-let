import {isObject} from './inspect'

export default function extend () {
    var length = arguments.length,
        object = arguments[0],
        index = 0,
        deep = false,
        obj;

    if (object === true) {
        deep = true;
        object = arguments[1];
        index++;
    }

    if (!object || length < index + 2)
        return object;

    while (++index < length) {
        obj = arguments[index];
        if (isObject(obj) && obj !== object) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    if (deep) {
                        if (isObject(obj[prop]))
                            if (isObject(object[prop]))
                                extend(true, object[prop], obj[prop]);
                            else
                                object[prop] = extend(true, {}, obj[prop]);
                        else
                            object[prop] = obj[prop];
                    } else
                        object[prop] = obj[prop];
                }
            }
        }
    }
    return object;
}

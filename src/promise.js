// a resolved promise
import {isError} from './inspect';

export default function (result) {
	return new Promise(function (resolve, reject) {
        if (isError(result)) reject(result);
        else resolve(result);
    });
}

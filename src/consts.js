export const ostring = Object.prototype.toString;
export const inBrowser = typeof window !== 'undefined' && ostring.call(window) !== '[object Object]';

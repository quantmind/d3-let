import {inBrowser} from './consts';

export const logger = inBrowser ? window.console : require('console');

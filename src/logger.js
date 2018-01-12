import {inBrowser} from './consts';

export const logger = inBrowser ? window.console : console;

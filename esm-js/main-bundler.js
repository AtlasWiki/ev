import * as tabs from './tabManager.js';
import * as calculations from './calculations.js';
import * as changelogs from './changelog.js';
import * as constants from './constants.js';
import * as utilities from './utils.js';
import * as props from './props.js';

const modules = [tabs, calculations, constants, changelogs, utilities, props]; 

modules.forEach(module => {
    Object.keys(module).forEach(key => {
        window[key] = module[key];
    });
});

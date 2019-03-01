'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */

function clone (obj) {
    let newObj = {};
    for(let key in obj){
        if(typeof(obj[key]) === 'object' && obj[key] !== null) {
            newObj[key] = clone(obj[key]);
            continue;
        }
        newObj[key] = obj[key];
    }
    return newObj;
}

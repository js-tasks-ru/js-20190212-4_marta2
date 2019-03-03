'use strict';

/** 
 * Генерация HTML списка друзей 
 * @param {Friend[]} friends 
 * @return {HTMLUListElement} 
 */
function makeFriendsList(friends) {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (let i = 0; i < friends.length; i++) {
        let str = friends[i].firstName + ' ' + friends[i].lastName;
        let li = document.createElement('li');
        li.innerHTML = str;
        ul.appendChild(li);
    }
    return ul;
}

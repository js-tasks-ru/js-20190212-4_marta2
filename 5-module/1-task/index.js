'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */

function highlight(table) {
    let trs = table.querySelectorAll('tbody > tr');
    for(let tr of trs){
        if(tr.lastElementChild.dataset.available === 'true'){
            tr.classList.add('available');
        } else if(!tr.lastElementChild.dataset.available) {
            tr.hidden = true;
        } else {
            tr.classList.add('unavailable');
        }

        if(tr.children[2].textContent === 'm'){
            tr.classList.add('male');
        } else if(tr.children[2].textContent === 'f'){
            tr.classList.add('female');
        }

        if(tr.children[1].textContent < 18){
            tr.style.textDecoration = 'line-through';
        }
    }
}

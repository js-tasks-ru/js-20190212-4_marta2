'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    let theadNames = ['Name', 'Age', 'Salary', 'City'];

    this.el = document.createElement('table');
    this.header = this.el.createTHead();
    this.headerRow = this.header.insertRow(0);

    for (let i = 0; i < theadNames.length; i++) {
        let cell = this.headerRow.insertCell(i);
        cell.innerHTML = theadNames[i];
        cell.dataset.header = theadNames[i].toLowerCase();
    }

    this.tBody = this.el.createTBody();

    for (let i = 0; i < items.length; i++) {
        let bodyRow = this.tBody.insertRow(i);
        bodyRow.id = "row";
        let counter = 0;
        for (let key in items[i]) {
            let bodyCell = bodyRow.insertCell(counter);
            bodyCell.innerHTML = items[i][key];
            counter++;
        }
    }

    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) {
        let trs = Array.prototype.slice.call(document.querySelectorAll('#row'));

        if (desc != true) {
            trs.sort(function (rowA, rowB) {
                if (typeCell(rowA.cells[column].innerHTML) === 'number') {
                    return rowB.cells[column].innerHTML - rowA.cells[column].innerHTML;
                } else {
                    return rowB.cells[column].innerHTML > rowA.cells[column].innerHTML ? -1 : 1;
                }
            });
        } else {
            trs.sort(function (rowA, rowB) {
                if (typeCell(rowA.cells[column].innerHTML) === 'number') {
                    return rowA.cells[column].innerHTML - rowB.cells[column].innerHTML;
                } else {
                    return rowB.cells[column].innerHTML < rowA.cells[column].innerHTML ? -1 : 1;
                }
            });
        }

        this.renderTrs(trs);

        function typeCell(cell) {
            if (typeof +cell === 'number' && !isNaN(+cell)) {
                return 'number';
            } else {
                return 'string';
            }
        }
    };

    this.renderTrs = function (items) {
        this.el.removeChild(this.tBody);
        for (let i = 0; i < items.length; i++) {
            this.tBody.appendChild(items[i]);
        }
        this.el.appendChild(this.tBody);
    }

}
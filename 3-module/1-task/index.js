/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let str = '';
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].age <= age) {
            arr.push(data[i].name + ', ' + data[i].balance);
        }
    }
    str = arr.join('\n');
    return str;
}

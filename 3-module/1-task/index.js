/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let str = '';
    for (let i = 0; i < data.length; i++){
        if(data[i].age <= age){
            str = str + data[i].name + ', ' + data[i].balance + '\n';
        }
    }
    return str;
}

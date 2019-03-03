/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */


function find(obj, value) {
    let arr = [];
    let path = '';

    function bypass(obj, value) {
        let tmp;
        for (let key in obj) {
            tmp = obj[key];
            if (typeof tmp === 'object') {
                path += key + '.';
                bypass(tmp, value);
            } else if (typeof tmp === 'string') {
                if (tmp === value) {
                    path = path + key;
                } else {
                    path = null;
                }
            }
        }
        if (path !== '' && path !== null) arr.push(path);
        path = '';
    }
    bypass(obj, value);
    if (!arr[0]) return null;
    if (!arr[1]) return arr[0];
    return arr;
}

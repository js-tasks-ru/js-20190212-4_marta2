/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

function pow(m, n) {
    let result = m;
    for (let i = 0; i < n - 1; i++) {
        result *= m;
    }
    return result;
}

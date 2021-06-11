/**
 * Adds two numbers.
 * ```
 * const sum = add(2, 3); //5
 * ```
 * @param {number} a 
 * @param {number} b 
 * @returns number
 */
const add = (a, b) => a + b;

/**
 * Subtracts two numbers.
 * @param {number} a 
 * @param {number} b 
 * @returns number
 */
const sub = (a, b) => a - b;

/**
 * Multiplies two numbers.
 * @param {number} a 
 * @param {number} b 
 * @returns number
 */
const multi = (a, b) => a * b;

module.exports = {
    add,
    sub,
    multi,
};
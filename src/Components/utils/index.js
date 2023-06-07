/**
 * This function calculates total price of a new order.
 * @param {Array} products cartProduct: Array of Objects. 
 * @returns {Number} Total price.
 */
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(products => sum += products.price)
    return sum
}
const cartProducts = ".cart_item .inventory_item_name"
const cartCheckoutButton = "#checkout"

const getCartProducts = async (page) => {
    const actualCartProducts = []
    const products = await page.locator(cartProducts).all()
    await Promise.all(products.map(async (product) => {
        const productName = await product.innerText()
        actualCartProducts.push(productName)
    }))
    return actualCartProducts
}

const gotoShipping = async (page) => {
    await page.click(cartCheckoutButton)
}

module.exports = { getCartProducts, gotoShipping }

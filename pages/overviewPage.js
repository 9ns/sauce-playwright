const finishCheckoutButton = "#finish"
const paymentInformation = ".summary_info_label"
const shippingInformation = ".summary_info_label"
const priceItemTotal = ".summary_subtotal_label"
const priceTaxTotal = ".summary_tax_label"
const priceTotal = "[class*=summary_total_label]"
const overviewProducts = ".inventory_item_name"

//TODO refactor into util
const getOverviewProducts = async (page) => {
    const actualProducts = []
    const products = await page.locator(overviewProducts).all()
    await Promise.all(products.map(async (product) => {
        const productName = await product.innerText()
        actualProducts.push(productName)
    }))
    return actualProducts
}

const finishCheckout = async (page) => {
    await page.click(finishCheckoutButton)
}

module.exports = { getOverviewProducts, finishCheckout }

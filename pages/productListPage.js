const title = ".title"
const sortDropdown = ".product_sort_container"
const inventoryList = ".inventory_list"
const productNames = ".inventory_item_name "
const productImages = ".inventory_item_img"
const productPrices = ".inventory_item_price"
const productDescriptions = ".inventory_item_desc"
const addToCartButtons = "button[data-test*='add-to-cart']"

const sortBy = async (page, sorting) => {
    await page.selectOption(sortDropdown, sorting)
}

const addProductFromList = async (page, index) => {
    await page.click(`//div[@class='inventory_item'][${index}]//button`)
}

const addLastProductFromList = async (page) => {
    await page.click("//div[@class='inventory_item'][last()]//button")
}

const gotoProduct = async (page, index) => {
    await page.click(`//div[@class='inventory_item_name '][${index}]`)
}

module.exports = {
    sortBy,
    addProductFromList,
    addLastProductFromList,
    gotoProduct
}

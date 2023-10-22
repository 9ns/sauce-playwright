const title = ".title"
const sortDropdown = ".product_sort_container"
const inventoryList = ".inventory_list"
const productNames = ".inventory_item_name "
const productImages = ".inventory_item_img"
const productPrices = ".inventory_item_price"
const productDescriptions = ".inventory_item_desc"
const addToCartButtons = "button[data-test*='add-to-cart']"

const addFirstProductToCart = async (page) => {
    await page.click("//div[@class='inventory_item'][first()]//button")
}

const addTopRightProductToCart = async (page) => {
    await page.click("//div[@class='inventory_item'][2]//button")
}

const addLastProductToCart = async (page) => {
    await page.click("//div[@class='inventory_item'][last()]//button")
}

const sortBy = async (page, sorting) => {
    await page.selectOption(sortDropdown, sorting)
}

module.exports = {
    addFirstProductToCart,
    addTopRightProductToCart,
    addLastProductToCart,
    sortBy
}

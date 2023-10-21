const title = ".title"
const sortDropdown = ".product_sort_container"
const inventoryList = ".inventory_list"
const productName = ".inventory_item_name "
const productImage = ".inventory_item_img"
const productPrice = ".inventory_item_price"
const productDescription = ".inventory_item_desc"
const addToCartButton = "button[data-test*='add-to-cart']"
const shoppingCartLink = ".shopping_cart_link"


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

const gotoCart = async (page) => {
    await page.click(shoppingCartLink)
}

module.exports = {
    addFirstProductToCart,
    addTopRightProductToCart,
    addLastProductToCart,
    sortBy,
    gotoCart
}

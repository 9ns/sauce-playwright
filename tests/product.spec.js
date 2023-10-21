import { test, expect } from "@playwright/test"
import { login } from "../pages/loginPage"
import {
    sortBy,
    addLastProductToCart,
    addTopRightProductToCart,
    gotoCart
} from "../pages/productPage"
import { getCartProducts, gotoShipping } from "../pages/cart"
import { enterShippingInfo, gotoOverview } from "../pages/shipping"
import { finishCheckout, getOverviewProducts } from "../pages/overviewPage"
import { getCheckoutConfirmation} from "../pages/checkoutComplete"
import UserTypes from "../enums/UserTypes"
import Sorting from "../enums/Sorting"


test.beforeEach(async ({ page }) => {
    await page.goto("/")
    await login(page, UserTypes.STANDARD_USER, process.env.PASSWORD)
})

test("User purchases most expensive and second product alphabetically", async ({ page }) => {
    const expectedProducts = ["Sauce Labs Fleece Jacket", "Sauce Labs Bike Light"]

    await sortBy(page, Sorting.PRICE_LOW_TO_HIGH)
    await addLastProductToCart(page)
    await sortBy(page, Sorting.NAME_A_TO_Z)
    await addTopRightProductToCart(page)
    await gotoCart(page)

    const actualCartProducts = await getCartProducts(page)
    expect(actualCartProducts).toEqual(expectedProducts)
    await gotoShipping(page)

    await enterShippingInfo(page)
    await gotoOverview(page)

    const actualOverviewProducts = await getOverviewProducts(page)
    expect(actualOverviewProducts).toEqual(expectedProducts)
    await finishCheckout(page)

    expect(await getCheckoutConfirmation(page)).toEqual("Thank you for your order!")
})

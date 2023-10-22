import { test, expect } from "@playwright/test"

import { login } from "../pages/loginPage"
import { gotoCart } from "../pages/header"
import {
    sortBy,
    addLastProductFromList,
    addProductFromList,
    gotoProduct
} from "../pages/productListPage"
import { 
    addProductToCart, 
    isProductImageVisible, 
    areProductDetailsVisible 
} from "../pages/productDetailPage"
import { getCartProducts, gotoShipping } from "../pages/cartPage"
import { enterShippingInfo, gotoOverview } from "../pages/shippingPage"
import { finishCheckout, getOverviewProducts } from "../pages/overviewPage"
import { getCheckoutConfirmation } from "../pages/checkoutCompletePage"

import UserTypes from "../enums/UserTypes"
import Sorting from "../enums/Sorting"

test.beforeEach(async ({ page }) => {
    await page.goto("/")
    await login(page, UserTypes.STANDARD_USER, process.env.PASSWORD)
})

test("User purchases most expensive and second product alphabetically", async ({ page }) => {
    const expectedProducts = ["Sauce Labs Fleece Jacket", "Sauce Labs Bike Light"]

    await sortBy(page, Sorting.PRICE_LOW_TO_HIGH)
    await addLastProductFromList(page)
    await sortBy(page, Sorting.NAME_A_TO_Z)
    await addProductFromList(page, 2)
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

test("User purchases product from product detail page", async ({ page }) => {
    const expectedProducts = ["Sauce Labs Backpack"]

    await gotoProduct(page, 1)
    await addProductToCart(page)
    await isProductImageVisible(page)
    await areProductDetailsVisible(page)
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

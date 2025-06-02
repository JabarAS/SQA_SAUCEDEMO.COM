import { browser, $, expect } from "@wdio/globals"
import productpage from '../pageobjects/productpage'
import loginpage from '../pageobjects/loginpage'
import inventorypage from "../pageobjects/inventorypage"
import cartpage from "../pageobjects/cartpage"
import sidebarpage from "../pageobjects/sidebarpage"

describe("halaman produk", () => {
    it('add item 1', async() => {
        await loginpage.open()
        await loginpage.login("standard_user", "secret_sauce")
        await productpage.add_backpack.click()
        await expect(productpage.remove_backpack).toExist()
        await productpage.cartBadge.waitForDisplayed({ timeout: 2000 });
        const badgeText = await productpage.cartBadge.getText();
        await expect(badgeText).toBe('1');
    })
    it('remove item 1', async() => {
        await productpage.remove_backpack.click()
        await expect(productpage.add_backpack).toExist()
    })
    it('masuk halaman deksripsi item 1', async() => {
        await productpage.deskrip_backpack.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
        await expect(inventorypage.item).toHaveText('Sauce Labs Backpack')
    })
    it('cart item1', async() => {
        await productpage.cart_prodct.click()
        await expect(cartpage.title_cart).toHaveText('Your Cart')
    })
    it('Masuk Side Bar', async function() {
        await productpage.side_bar.click()
        await expect(sidebarpage.sidebar_page).toExist()
    })
    it('Filter Item', async function() {

    })
})
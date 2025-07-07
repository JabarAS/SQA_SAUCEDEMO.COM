import { browser, expect } from "@wdio/globals"
import loginpage from "../pageobjects/loginpage"
import productpage from "../pageobjects/productpage"
import cartpage from "../pageobjects/cartpage"
import checkoutpage from "../pageobjects/checkoutpage"

describe('CART', () => {
    beforeEach(async() => {
        await browser.reloadSession()
        await loginpage.loginToCart("standard_user", "secret_sauce")
    })
    it('Continue Shopping', async() => {
        await cartpage.continue_shp.click()
        await expect(productpage.judul_halaman).toHaveText('Products')
    })
    it('Remove barang', async() => {
        await cartpage.remove.click()
        await expect(await $('#item_4_title_link').isExisting()).toBe(false);
    })
    it('Checkout barang', async() => {
        await cartpage.checkout.click()
        await expect(checkoutpage.title_cart).toHaveText('Checkout: Your Information')
        await browser.pause(3000)

    })
})
import { browser, expect } from "@wdio/globals"
import loginpage from "../pageobjects/loginpage"
import productpage from "../pageobjects/productpage"
import cartpage from "../pageobjects/cartpage"
import checkoutpage from "../pageobjects/checkoutpage"

describe('CART', () => {
    it('Checkout barang', async() => {
        await loginpage.open()
        await loginpage.login("standard_user", "secret_sauce")
        await productpage.add_backpack.click()
        await productpage.cart_prodct.click()
        await cartpage.checkout.click()
        await expect(checkoutpage.title_cart).toHaveText('Checkout: Your Information')
        await browser.pause(3000)
        await checkoutpage.firstname.setValue('Dermani')
        await checkoutpage.lastname.setValue('Faregni')
        await checkoutpage.zip.setValue('12345')
        await browser.pause(3000)
        await checkoutpage.continue_button.click()
    })
    it('Isi formulir', async() => {

    })
})
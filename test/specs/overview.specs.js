import { expect } from '@wdio/globals'
import loginpage from '../pageobjects/loginpage'
import overviewpage from '../pageobjects/overviewpage'
import checkoutpage from '../pageobjects/checkoutpage'
import productpage from '../pageobjects/productpage'

describe('Checkout pages', () => {
    beforeEach(async() => {
        await browser.reloadSession()
        await loginpage.loginToOverview("standard_user", "secret_sauce")
    })
    it('Memasukkan data pada checkout', async() => {
        await overviewpage.finish.click()
        await expect(checkoutpage.title_cart).toHaveText('Checkout: Complete!')
    })
    it('Cancel', async() => {
        await overviewpage.cancel.click()
        await expect(productpage.judul_halaman).toHaveText('Products')
    })
})
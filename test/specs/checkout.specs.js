import { expect } from '@wdio/globals'
import loginpage from '../pageobjects/loginpage'
import overviewpage from '../pageobjects/overviewpage'
import checkoutpage from '../pageobjects/checkoutpage'

describe('Checkout pages', () => {
    beforeEach(async() => {
        await browser.reloadSession()
        await loginpage.loginTOCheckout("standard_user", "secret_sauce")
    })

    it('Memasukkan data pada checkout', async() => {
        await checkoutpage.firstname.setValue('Dermani')
        await checkoutpage.lastname.setValue('Faregni')
        await checkoutpage.zip.setValue('12345')
        await browser.pause(3000)
        await checkoutpage.continue_button.click()
        await expect(overviewpage.title_cart).toHaveText('Checkout: Overview')
    })
})
import { expect } from '@wdio/globals'
import loginpage from '../pageobjects/loginpage'
import inventorypage from '../pageobjects/inventorypage'
import productpage from '../pageobjects/productpage'

describe('Cek Inventory', () => {
    it("Add to cart", async() => {
        await loginpage.open()
        await loginpage.login("standard_user", "secret_sauce")
        await productpage.deskrip_backpack.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
        await expect(inventorypage.item).toHaveText('Sauce Labs Backpack')
        await inventorypage.add_to_cart.click()
        expect(inventorypage.remove_button).toExist()
    })
})
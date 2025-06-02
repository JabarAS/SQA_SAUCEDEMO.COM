import { expect } from '@wdio/globals'
import inventorypage from '../pageobjects/inventorypage'

describe('Cek Inventory', () => {
    it.only("Add to cart", async() => {
        await inventorypage.Open()
        await inventorypage.add_to_cart.click()
        expect(inventorypage.remove_button).toExist()
    })
})
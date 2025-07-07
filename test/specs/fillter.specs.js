import { $, $$, expect, browser } from "@wdio/globals";
import loginpage from "../pageobjects/loginpage";
import productpage from "../pageobjects/productpage";

describe('filter PRODUCT', () => {
    beforeEach(async() => {
        await browser.reloadSession()
        await loginpage.open()
        await loginpage.login("standard_user", "secret_sauce")

    })
    it('Sort products by Name A to Z', async() => {
        await productpage.sortBy('az');
        const names = await productpage.getProductNames();

        for (let i = 0; i < names.length - 1; i++) {
            expect(names[i].toLowerCase() <= names[i + 1].toLowerCase()).toBe(true);
        }
    });

    it('Sort products by Name Z to A', async() => {
        await productpage.sortBy('za');
        const names = await productpage.getProductNames();

        for (let i = 0; i < names.length - 1; i++) {
            expect(names[i].toLowerCase() >= names[i + 1].toLowerCase()).toBe(true);
        }
    });

    it('Sort products by Price low to high', async() => {
        await productpage.sortBy('lohi');
        const prices = await productpage.getProductPrices();

        for (let i = 0; i < prices.length - 1; i++) {
            expect(prices[i] <= prices[i + 1]).toBe(true);
        }
    });

    it('Sort products by Price high to low', async() => {
        await productpage.sortBy('hilo');
        const prices = await productpage.getProductPrices();

        for (let i = 0; i < prices.length - 1; i++) {
            expect(prices[i] >= prices[i + 1]).toBe(true);
        }
    });


});
import { $, expect } from "@wdio/globals"
import loginpage from '../pageobjects/loginpage'


describe('Add 3 random items to cart', () => {
    it('should add 3 random items without using specific IDs', async() => {
        await loginpage.open();
        await loginpage.login('standard_user', 'secret_sauce');

        const addToCartButtons = await $$('button.btn_primary.btn_inventory');
        const indices = [];
        while (indices.length < 3) {
            const idx = Math.floor(Math.random() * addToCartButtons.length);
            if (!indices.includes(idx)) indices.push(idx);
        }

        for (const i of indices) {
            await addToCartButtons[i].click();
        }

        const cartBadge = await $('.shopping_cart_badge');
        await cartBadge.waitForDisplayed({ timeout: 5000 });
        await expect(cartBadge.getText()).toBe('3');
    });
});
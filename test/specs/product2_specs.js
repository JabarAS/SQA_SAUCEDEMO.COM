import { browser, $, expect } from "@wdio/globals"
import loginpage from '../pageobjects/loginpage'


describe('Add 3 random items to cart', () => {
    it('should add 3 random items without using specific IDs', async() => {
        await loginpage.open();
        await loginpage.login('standard_user', 'secret_sauce');

        // Ambil semua tombol "Add to cart"
        const addToCartButtons = await $$('button.btn_primary.btn_inventory');

        // Fungsi untuk memilih n indeks acak dari array
        const getRandomIndices = (arrayLength, n) => {
            const indices = new Set();
            while (indices.size < n) {
                const randomIndex = Math.floor(Math.random() * arrayLength);
                indices.add(randomIndex);
            }
            return Array.from(indices);
        };

        // Pilih 3 indeks acak
        const randomIndices = getRandomIndices(addToCartButtons.length, 3);

        // Klik tombol "Add to cart" berdasarkan indeks acak
        for (const index of randomIndices) {
            await addToCartButtons[index].click();
            await browser.pause(1000)
        }

        // Cek badge cart sesuai jumlah item yang ditambahkan (3)
        const cartBadge = await $('.shopping_cart_badge');
        await cartBadge.waitForDisplayed({ timeout: 5000 });
        const badgeText = await cartBadge.getText();
        await expect(badgeText).toBe('3');
        await browser.pause(5000)
    });
});
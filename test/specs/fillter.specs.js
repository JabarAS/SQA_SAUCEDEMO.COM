import { $, $$, expect, browser } from "@wdio/globals";
import loginpage from "../pageobjects/loginpage";

describe('filter PRODUCT', () => {
    it('Sort products by Name A to Z', async() => {
        await loginpage.open()
        await loginpage.login("standard_user", "secret_sauce")


        await $('select[data-test="product-sort-container"]')
            .selectByAttribute('value', 'az');

        await browser.pause(1000); // tunggu efek sorting

        const items = await $$('div.inventory_item_name'); // Pastikan selector benar

        const names = [];
        for (let item of items) {
            names.push(await item.getText());
        }

        for (let i = 0; i < names.length - 1; i++) {
            expect(names[i].toLowerCase() <= names[i + 1].toLowerCase()).toBe(true);
        }
        browser.pause(2000); // Tunggu 2 detik untuk melihat hasil
    });
    it('produk harus urut alfabetis dari Z ke A', async() => {
        await loginpage.open()
        await loginpage.login("standard_user", "secret_sauce")

        await $('select[data-test="product-sort-container"]')
            .selectByAttribute('value', 'za');

        await browser.pause(5000); // tunggu sorting

        const items = await $$('div.inventory_item_name'); // Sesuaikan jika perlu

        const names = [];
        for (let item of items) {
            names.push(await item.getText());
        }

        for (let i = 0; i < names.length - 1; i++) {
            expect(names[i].toLowerCase() >= names[i + 1].toLowerCase()).toBe(true);
        }
        browser.pause(5000); // Tunggu 2 detik untuk melihat hasil
    });
    it('produk harus urut dari harga termurah ke termahal', async() => {
        await loginpage.open()
        await loginpage.login("standard_user", "secret_sauce")

        await $('select[data-test="product-sort-container"]')
            .selectByAttribute('value', 'lohi'); // value untuk "low to high"

        await browser.pause(4000); // tunggu efek sorting

        const items = await $$('div.inventory_item_price'); // Pastikan selector ini sesuai

        const prices = [];
        for (let item of items) {
            const text = await item.getText(); // Contoh: "$29.99"
            const num = parseFloat(text.replace('$', '')); // Ambil angka saja
            prices.push(num);
        }

        for (let i = 0; i < prices.length - 1; i++) {
            expect(prices[i] <= prices[i + 1]).toBe(true);
        }
    });

    it('produk harus urut dari harga termahal ke termurah', async() => {
        await loginpage.open()
        await loginpage.login("standard_user", "secret_sauce")

        await $('select[data-test="product-sort-container"]')
            .selectByAttribute('value', 'hilo'); // value untuk "high to low"

        await browser.pause(1000); // tunggu efek sorting

        const items = await $$('div.inventory_item_price'); // Pastikan selector ini sesuai

        const prices = [];
        for (let item of items) {
            const text = await item.getText(); // Contoh: "$49.99"
            const num = parseFloat(text.replace('$', '')); // Ambil angka
            prices.push(num);
        }

        for (let i = 0; i < prices.length - 1; i++) {
            expect(prices[i] >= prices[i + 1]).toBe(true);
        }
    });


});
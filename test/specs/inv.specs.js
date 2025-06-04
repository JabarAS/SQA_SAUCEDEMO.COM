import loginpage from "../pageobjects/loginpage";

describe('cek inventory', () => {
    it('Random inventory', async() => {
        await loginpage.open()
        await loginpage.login("standard_user", "secret_sauce")

        // Tunggu sampai semua item inventory muncul
        let inventoryItems = await $$('.inventory_item', 'data-test="inventory-item"');
        await browser.waitUntil(
            async() => (await inventoryItems.length) > 0, {
                timeout: 5000,
                timeoutMsg: 'Item inventory tidak muncul dalam 5 detik'
            }
        );
        // Ambil jumlah item yang ada
        const itemCount = inventoryItems.length;
        console.log(`Jumlah item inventory: ${itemCount}`);

        // Pilih index random dari item yang ada
        const randomIndex = Math.floor(Math.random() * itemCount);
        console.log(`Memilih item index random: ${randomIndex}`);

        // Klik item random tersebut
        // Biasanya klik pada link gambar atau nama item agar masuk ke halaman detail
        // Dari HTML yang kamu kirim, klik pada elemen <a> dengan id yang mengandung "item_X_img_link" atau "item_X_title_link"
        const randomItem = inventoryItems[randomIndex];

        // Cari elemen link gambar atau judul di dalam item random
        const linkImg = await randomItem.$('a[id*="_img_link"]');
        const linkTitle = await randomItem.$('a[id*="_title_link"]');

        // Prioritaskan klik link gambar jika ada, jika tidak klik link judul
        if (await linkImg.isExisting()) {
            await linkImg.click();
        } else if (await linkTitle.isExisting()) {
            await linkTitle.click();
        } else {
            throw new Error('Link gambar dan judul tidak ditemukan pada item random');
        }
        // Tunggu sampai halaman detail muncul dengan nama produk
        const productName = await $('[data-test="inventory-item-name"]');
        await productName.waitForDisplayed({ timeout: 5000 });

        // Ambil teks nama produk di halaman detail
        const nameText = await productName.getText();
        console.log(`Nama produk di halaman detail: ${nameText}`);

        // Validasi nama produk tidak kosong (bisa ditambah validasi lain sesuai kebutuhan)
        expect(nameText).not.toBe('');
    });
});
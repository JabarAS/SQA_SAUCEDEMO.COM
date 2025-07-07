import { $ } from "@wdio/globals"

class ProductsPage {
    get judul_halaman() { return $('[data-test="title"]') }
    get add_backpack() { return $('#add-to-cart-sauce-labs-backpack') }
    get remove_backpack() { return $('#remove-sauce-labs-backpack') }
    get deskrip_backpack() { return $('#item_4_title_link') }
    get filter_item() { return $('') }
    get cart_prodct() { return $('.shopping_cart_link') }
    get cartBadge() { return $('.shopping_cart_badge') }
    get side_bar() { return $('.bm-burger-button') }

    get sortDropdown() {
        return $('select[data-test="product-sort-container"]');
    }

    get productNames() {
        return $$('div.inventory_item_name');
    }

    get productPrices() {
        return $$('div.inventory_item_price');
    }

    async sortBy(value) {
        await this.sortDropdown.selectByAttribute('value', value);
        await browser.pause(1000);
    }

    async getProductNames() {
        const elements = await this.productNames;
        const names = [];
        for (let el of elements) {
            names.push(await el.getText());
        }
        return names;
    }

    async getProductPrices() {
        const elements = await this.productPrices;
        const prices = [];
        for (let el of elements) {
            const text = await el.getText();
            prices.push(parseFloat(text.replace('$', '')));
        }
        return prices;
    }


}


export default new ProductsPage()
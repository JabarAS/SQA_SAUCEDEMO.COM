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

}


export default new ProductsPage()
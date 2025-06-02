import { $ } from "@wdio/globals"

class Inventory {
    get item() { return $('div[data-test="inventory-item-name"]') }
    get add_to_cart() { return $('#add-to-cart') }
    get remove_button() { return $('#remove') }

}


export default new Inventory()
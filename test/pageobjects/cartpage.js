import { $ } from '@wdio/globals'

class CartPage {
    get title_cart() { return $('[data-test="title"]') }
    get checkout() { return $('#checkout') }
    get remove() { return $('#remove-sauce-labs-backpack') }
    get continue_shp() { return $('#continue-shopping') }
}

export default new CartPage()
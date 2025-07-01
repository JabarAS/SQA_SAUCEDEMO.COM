import { $ } from '@wdio/globals'

class CartPage {
    get title_cart() { return $('[data-test="title"]') }
    get checkout() { return $('#checkout') }
}

export default new CartPage()
import { $ } from '@wdio/globals'

class CartPage {
    get title_cart() { return $('[data-test="title"]') }
}

export default new CartPage()
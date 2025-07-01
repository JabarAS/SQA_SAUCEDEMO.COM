import { $ } from '@wdio/globals'

class CheckoutPage {
    get title_cart() { return $('[data-test="title"]') }
    get firstname() { return $('#first-name') }
    get lastname() { return $('#last-name') }
    get zip() { return $('#postal-code') }
    get continue_button() { return $('[data-test="continue"]') }
}

export default new CheckoutPage()
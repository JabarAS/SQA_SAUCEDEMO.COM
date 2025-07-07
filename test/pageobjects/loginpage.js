import { browser, $ } from "@wdio/globals"
import productpage from "./productpage"
import cartpage from "./cartpage"
import checkoutpage from "./checkoutpage"

class LoginPage {
    get username() { return $("#user-name") }
    get password() { return $("#password") }
    get login_btn() { return $("#login-button") }
    get alert_message() { return $('[data-test="error"]') }

    async login(username, password) {
        await this.username.setValue(username)
        await this.password.setValue(password)
        await this.login_btn.click()
    }
    async open() {
        return browser.url("https://www.saucedemo.com/")
    }
    async loginToCart(username, password) {
        await this.open();
        await this.login(username, password);
        await productpage.add_backpack.click();
        await productpage.cart_prodct.click();
        // Sekarang sudah di halaman cart
    }
    async loginTOCheckout(username, password) {
        await this.open();
        await this.login(username, password);
        await productpage.add_backpack.click();
        await productpage.cart_prodct.click();
        await cartpage.checkout.click();
        // Sekarang sudah di halaman checkout
    }
    async loginToOverview(username, password) {
        await this.open();
        await this.login(username, password);
        await productpage.add_backpack.click();
        await productpage.cart_prodct.click();
        await cartpage.checkout.click(); // Sekarang sudah di halaman checkout
        await checkoutpage.firstname.setValue('Dermani')
        await checkoutpage.lastname.setValue('Faregni')
        await checkoutpage.zip.setValue('12345')
        await checkoutpage.continue_button.click()

    }

}


export default new LoginPage();
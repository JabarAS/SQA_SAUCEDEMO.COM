import { browser, $ } from "@wdio/globals"

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
}


export default new LoginPage();
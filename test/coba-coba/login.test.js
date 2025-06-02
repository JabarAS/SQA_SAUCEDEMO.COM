import { browser, $, expect } from '@wdio/globals'

describe("LOGIN", function() {
    it("Username benar , password benar", async function() {
        await browser.url('https://www.saucedemo.com/')

        let username = $("#user-name")
        await username.setValue("standard_user")
        let password = $("#password")
        await password.setValue("secret_sauce")
        let login_button = $("#login-button")
        await login_button.click()

        let judul_halaman_produk = $('[data-test="title"]')
        await expect(judul_halaman_produk).toHaveText('Products')
    })

    it("Username benar , password kosong", async function() {
        await browser.url('https://www.saucedemo.com/')

        let username = $("#user-name")
        await username.setValue("standard_user")

        let login_button = $("#login-button")
        await login_button.click()

        let error_msg = $('[data-test="error"]')
        await expect(error_msg).toHaveText('Epic sadface: Password is required')
    })

    it("Username benar , password salah", async function() {
        await browser.url('https://www.saucedemo.com/')

        let username = $("#user-name")
        await username.setValue("standard_user")
        let password = $("#password")
        await password.setValue("sesse")
        let login_button = $("#login-button")
        await login_button.click()

        let error_msg = $('[data-test="error"]')
        await expect(error_msg).toHaveText('Epic sadface: Username and password do not match any user in this service')

    })

})
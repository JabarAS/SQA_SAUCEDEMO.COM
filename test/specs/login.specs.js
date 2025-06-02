import { browser, $, expect } from "@wdio/globals"
import LoginPage from "../pageobjects/loginpage"
import productpage from "../pageobjects/productpage"

describe("LOGIN DENGAN VALID", () => {
    it("++ user input username dan password valid", async() => {
        await LoginPage.open()
        await LoginPage.login("standard_user", "secret_sauce")

        await expect(productpage.judul_halaman).toHaveText('Products')
    })
    it("--user input username valid tetapi  password  tidak valid", async() => {
        await LoginPage.open()
        await LoginPage.login("standards_user", "saucedemo")
        await expect(LoginPage.alert_message).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })
    it("-- user input username valid tetapi  password  kosong", async() => {
        await LoginPage.open()
        await LoginPage.login("standards_user", "")
        await expect(LoginPage.alert_message).toHaveText('Epic sadface: Password is required')
    })
    it("-- user input username invalid dan password valid", async() => {
        await LoginPage.open()
        await LoginPage.login("standards", "secret_sauce")
        await expect(LoginPage.alert_message).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })
    it("-- user input username kosong dan password valid", async() => {
        await LoginPage.open()
        await LoginPage.login("", "secret_sauce")
        await expect(LoginPage.alert_message).toHaveText('Epic sadface: Username is required')
    })
    it("-- user input username dan  password invalid", async() => {
        await LoginPage.open()
        await LoginPage.login("standards", "saucedemo")
        await expect(LoginPage.alert_message).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })
})
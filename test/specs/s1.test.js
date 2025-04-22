import { browser, $, expect } from '@wdio/globals'



describe("Test TEXT BOX", function() {
    it("form ELEMENT BENAR", async function() {
        await browser.url("https://demoqa.com/text-box")

        let name = $('#userName')
        await name.setValue('ROMI LASTE')
        let email = $('#userEmail')
        await email.setValue('ramo.serti24@yahoo.com')
        let cur_address = $('#currentAddress')
        await cur_address.setValue('jl Ahmad Yani no 2929, Semarang, Jawa Tengah')
        let perm_address = $('#permanentAddress')
        await perm_address.setValue('jl Basuki Rahmat no 99 , Jawa Timur')
        let submit_button = $('#submit')
        await submit_button.click()

        let output = $('#output')
        await expect(output).toHaveId('output')
    })

    it(" form nama menggunakan angka ", async function() {
        await browser.url("https://demoqa.com/text-box")

        let name = $('#userName')
        await name.setValue('1232441223')
        let email = $('#userEmail')
        await email.setValue('ramo.serti24@yahoo.com')
        let cur_address = $('#currentAddress')
        await cur_address.setValue('jl Ahmad Yani no 2929, Semarang, Jawa Tengah')
        let perm_address = $('#permanentAddress')
        await perm_address.setValue('jl Basuki Rahmat no 99 , Jawa Timur')
        let submit_button = $('#submit')
        await submit_button.click()

        let output = $('#output')
        await expect(output).toHaveId('output')
    })



})
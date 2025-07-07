import { $ } from '@wdio/globals'

class OverviewPage {
    get title_cart() { return $('[data-test="title"]') }
    get cancel() { return $('#cancel') }
    get finish() { return $('#finish') }

}

export default new OverviewPage()
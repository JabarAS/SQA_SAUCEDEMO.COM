import { $ } from '@wdio/globals'

class SidePage {
    get sidebar_page() { return $('.bm-item-list') }
}

export default new SidePage()
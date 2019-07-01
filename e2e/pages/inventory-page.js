import { BasePage } from '../basePage';
import { InventoryPageUI } from '../ui/inventory-page';
import { click } from 'taiko/lib/taiko';

export class InventoryPage extends BasePage {
    constructor(browser) {
        super(browser);
    }

    async isNewDevicePageDisplayed() {
        return await $(InventoryPageUI.DEVICE_NAME_TXT).isDisplayed();
    }

}

import { BasePageUI } from '../ui/base-page';
import { BaseAction } from '../common/baseAction';

export class BasePage extends BaseAction {

    constructor(browser) {
        super(browser);
    }
    async clickLeftMenuButton(){
        await this.click(AbstractPageUI.LEFT_MENU_BTN);
    }
}

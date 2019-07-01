import { BasePage } from '../basePage';
import { LoginPageUI } from '../ui/login-page';
import { click } from 'taiko/lib/taiko';

export class LoginPage extends BasePage {
    constructor(browser) {
        super(browser);
    }

    async loginAsRole(role) {
        let email ='';
        let password =Constants.PASSWORD;
        if(role==='Admin')
        {
            email = Constants.COMPANY_ADMIN_EMAIL;
        }

        if(role==='Global Admin')
        {
            email = Constants.GLOBAL_ADMIN_EMAIL;
        }
        
        await write(email, $(LoginPageUI.EMAIL_TXT));
        await write(password, $(LoginPageUI.PASSWORD_TXT));
        await click($(LoginPageUI.SIGN_IN_BUTTON));
        }


}

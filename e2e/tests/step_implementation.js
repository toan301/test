/* globals gauge*/
"use strict";

import {LoginPage} from '../pages/login-page';
import { InventoryPage } from '../pages/inventory-page';

const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    $
} = require('taiko');
const assert = require("assert");
loginPage = new LoginPage();
inventoryPage = new InventoryPage();

beforeSuite(async () => {
    await openBrowser({
        headless: false
    })
});

afterSuite(async () => {
    await closeBrowser();
});

step('Navigate to <url>', async url => {
    await goto(url)
});

step('User goes to <url>', async url => {
    await goto(url)
});

step("Enter the email <email>", async (email) => {
    await write(email, $("input[id=email]"));
    await press('Enter');
});

step("Verify the error message is <errorMsg>", async (errorMsg) => {
    assert.equal(await $("div.is-error.callout h5").text(), errorMsg);
});


step('Enter the email <email> at the Login Page', async (email) => {
    await write(email, $("input[id=email]"));
    await press('Enter');
});

step('User logged as <role>', async (role) => {
    loginPage.loginAsRole(role);
});

step('Verify user can access device/new page', async (errorMsg) => {
    assert.ok(await inventoryPage.isNewDevicePageDisplayed());
});

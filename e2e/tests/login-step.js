/* globals gauge*/
"use strict";
import {Constants} from '../common/constant';
import {LoginPage} from '../pages/login-page';
import { InventoryPage } from '../pages/inventory-page';
loginPage = new LoginPage();
inventoryPage = new InventoryPage();

const {
    write,
    press,
    $
} = require('taiko');
const assert = require("assert");


step("Enter the email <email> at the Login Page", async (email) => {
    await write(email, $("input[id=email]"));
    await press('Enter');
});

step("Verify the error message is <errorMsg>", async (errorMsg) => {
    assert.equal(await $("div.is-error.callout h5").text(), errorMsg);
});

step("User logged as <role>", async (role) => {
    loginPage.loginAsRole('Global Admin');
});

step("Verify user can access device/new page", async (errorMsg) => {
    assert.ok(await inventoryPage.isNewDevicePageDisplayed());
});



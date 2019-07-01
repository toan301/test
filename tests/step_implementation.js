/* globals gauge*/
// import { LoginPage } from '../e2e/pages/login-page';
// import { InventoryPage } from '../../pages/inventory-page';

"use strict";


// loginPage = new LoginPage();
// inventoryPage = new InventoryPage();

const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    click,
    waitFor,
    press,
    into,
    $
} = require('taiko');
const assert = require("assert");


beforeSuite(async () => {
    await openBrowser({
        headless: false
    })
});

afterSuite(async () => {
    await closeBrowser();
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

step('User logged as <role>', async (role) => {
    // loginPage.loginAsRole(role);
    let email ='';
    let password = 'user1234';
    if(role==='Admin')
    {
        email = '';
    }

    if(role==='Global Admin')
    {
        email = 'aaron.blake@oysterlabs.com';
    }
    
    await write(email, $('//input[@id="email"]'));
    await write(password, $('//input[@type="password"]'));
    await press('Enter');
});

step("User goes to New device page", async (errorMsg) => {
    await waitFor(3000);
    await click(into($('//span[@class="navbar-toggler-icon"]')));
    await click(into($('//div[normalize-space(text())="INVENTORY"]')));
    await click(into($('//a[text()="Equipments"]')));
    await click(into($('//a[text()="New Device"]')));
    await waitFor(10000);
});


step("Verify user can access New device page", async () => {
    await waitFor(3000);
    assert.ok(await $('//strong[text()="Upload File"]').exists());
});

step("Verify user can access Home page", async () => {
    assert.ok(await $('//img[@title="Client Logo"]').exists());
});

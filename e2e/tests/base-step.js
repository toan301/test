/* globals gauge*/
"use strict";
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
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


step("Enter the email <email>", async (email) => {
    await write(email, $("input[id=email]"));
    await press('Enter');
});

step("Verify the error message is <errorMsg>", async (errorMsg) => {
    assert.equal(await $("div.is-error.callout h5").text(), errorMsg);
});
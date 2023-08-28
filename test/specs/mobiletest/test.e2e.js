//const { expect } = require("@wdio/globals");
const LoginPage = require("../../pageobjects/login.page")
//const SecurePage = require("../../pageobjects/secure.page");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {


    await LoginPage.login("superadmin@dcarb.com", "123456");
    await browser.pause(1000);

    await LoginPage.btnSubmit()
    await browser.pause(10000);

  });
});

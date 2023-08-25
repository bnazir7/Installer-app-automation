const { expect } = require("@wdio/globals");
const LoginPage = require("../../pageobjects/login.page")
const SecurePage = require("../../pageobjects/secure.page");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {


    await LoginPage.login("superadmin@dcarb.com", "123456");
    await LoginPage.btnSubmit()

    // Assert that the "My installation" button exists after login
//        const myInstallationButton = await $("android.widget.Button=start an installation");
//        await expect(myInstallationButton).toBeExisting();
//            await expect(SecurePage.flashAlert).toBeExisting()
//            await expect(SecurePage.flashAlert).toHaveTextContaining(
//                'You logged into a secure area!')
  });
});

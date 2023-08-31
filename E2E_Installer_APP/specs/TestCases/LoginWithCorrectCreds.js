const { $ } = require("@wdio/globals");
describe("Installer app login test case", () => {
  it("should login with valid credentials", async () => {

//getting the username field and entering email
     const emailInput = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]');
     await emailInput.click()

     await emailInput.setValue('superadmin@dcarb.com');

// getting the password and entering password
      const passwordInput = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]');
      await passwordInput.click()
      await passwordInput.setValue('123456');
      await driver.hideKeyboard();




//getting and clicking on the login button
       const loginButton = $(`~Login`);
       await loginButton.waitForDisplayed();
       await loginButton.click();
       await browser.pause(10000);




  });
});

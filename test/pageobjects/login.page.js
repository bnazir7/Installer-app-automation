const { $ } = require("@wdio/globals");
const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  async inputUsername() {
       const emailInput = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]');
         await emailInput.click()
         await emailInput.setValue('superadmin@dcarb.com');
  }


  async inputPassword() {
    const passwordInput = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]');
     await passwordInput.click()
     await passwordInput.setValue('123456');
     await driver.hideKeyboard();
  }



  async btnSubmit() {
  const Login_icon = '~Login'
  $(Login_icon).click()
  browser.pause(15000)

  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {

    await this.inputUsername()
    await this.inputPassword()

  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

module.exports = new LoginPage();

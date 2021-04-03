const elementUtil = require('../util/element')
const testData = require('../data/constants')
const browserAction = require('../util/browser.action')

class LoginPage{

    //Login page locators

    get login_username(){
        return $("//input[@id='txtUsername']")
    }
    get login_password(){
        return $("//input[@id='txtPassword']")
    }
    get login_button(){
        return $("//input[@id='btnLogin']")
    }
    get login_logo(){
        return $("//div[@id='divLogo']//img")
    }

    //Login page actions

    getLoginPageTitle(){
        return browserAction.browser_getPageTitle(testData.LOGIN_PAGE_TITLE)
    }

    verifyLoginPageLogo(){
        return elementUtil.element_displayed(this.login_logo)
    }

    doLoginIntoApp(username,password){
        elementUtil.element_enterValue(this.login_username, username)
        elementUtil.element_enterValue(this.login_password, password)
        elementUtil.element_click(this.login_button)
    }

}
module.exports = new LoginPage()
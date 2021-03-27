const { assert } = require('chai')
const loginPage = require('../pages/login.page')
const configData = require('../config')
const constants = require('../constants')

describe('Login page feature test', function(){
    it('Verify login page title', function(){
        browser.setWindowSize(1366, 768)
        browser.url('/') 
        browser.pause(5000)
        const title = loginPage.getLoginPageTitle();
        console.log('Login page title is : ', title)
        assert.equal(constants.LOGIN_PAGE_TITLE, title, 'Login page title is not found')
    })

    it('Verify login page logo', function(){
        assert.equal(true, loginPage.verifyLoginPageLogo(), 'Login page logo is not present')
    })

    it('Verify login to application', function(){
        loginPage.doLoginIntoApp(configData.username, configData.password)
    })

    it('should return browser window size', function () {
        const windowSize = browser.getWindowSize();
        console.log(windowSize);
        // outputs `{ width: 1280, height: 767 }`
    })
})
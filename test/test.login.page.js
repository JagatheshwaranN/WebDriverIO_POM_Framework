const { assert } = require('chai')
const loginPage = require('../pages/login.page')
const configData = require('../data/config')
const testData = require('../data/constants')
const { addFeature } = require('@wdio/allure-reporter').default

describe('Login page feature test', function(){
    
    it('Verify login page title', function(){
        addFeature('Login page title')
        browser.setWindowSize(1366, 768)
        browser.url('/') 
        browser.pause(5000)
        const title = loginPage.getLoginPageTitle()
        console.log('Login page title is : ', title)
        assert.equal(testData.LOGIN_PAGE_TITLE, title, 'Login page title is not found')
    })

    it('Verify login page logo', function(){
        addFeature('Login page logo')
        assert.equal(true, loginPage.verifyLoginPageLogo(), 'Login page logo is not present')
    })

    it('Verify login to application', function(){
        addFeature('Login to application')
        loginPage.doLoginIntoApp(configData.username, configData.password)
    })

})
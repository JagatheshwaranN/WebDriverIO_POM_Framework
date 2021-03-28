const { assert } = require('chai')
const homePage = require('../pages/home.page')
const loginPage = require('../pages/login.page')
const configData = require('../config')
const constants = require('../constants')

describe('Home page feature test', function(){
    
    it('Verify home page title', function(){
        browser.setWindowSize(1366, 768)
        browser.url('/') 
        browser.pause(5000)
        loginPage.doLoginIntoApp(configData.username, configData.password)
        const title = homePage.getHomePageTitle()
        console.log('Home page title is : ', title)
        assert.equal(constants.HOME_PAGE_TITLE, title, 'Home page title is not found')
    })

    it('Verify home page logo', function(){
        assert.equal(true, homePage.verifyHomePageLogo(), 'Home page logo is not present')
    })

    it('Verify home page account name', function(){
        assert.equal(true, homePage.verifyHomePageAccountName(), 'Home page account name is not present')
    })

    it('Verify home page header', function(){
        const header = homePage.verifyHomePageHeaderText()
        assert.equal(constants.HOME_PAGE_HEADER, header, 'Home page header is mismatch')
    })

})
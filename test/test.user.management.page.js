const { assert } = require('chai')
const homePage = require('../pages/home.page')
const loginPage = require('../pages/login.page')
const usermanagementPage = require('../pages/user.management.page')
const configData = require('../config')
const constants = require('../constants')



describe('User management page feature test', function(){
    
    it('Verify navigate to user management page', function(){
        browser.setWindowSize(1366, 768)
        browser.url('/') 
        browser.pause(5000)
        loginPage.doLoginIntoApp(configData.username, configData.password)
        const title = homePage.getHomePageTitle()
        assert.equal(constants.HOME_PAGE_TITLE, title, 'Home page title is not found')
        homePage.navigateToUserManagementPage()
    })

    it('Verify user management page header', function(){
        const header = usermanagementPage.verifyUserManagementPageHeaderText()
        assert.equal(constants.USER_MANAGEMENT_PAGE_HEADER, header, 'User management page header is mismatch')
    })

    it('Verify user search functionality', function(){
        usermanagementPage.verifyUserSearchFunctionality(configData.username)
    })

})
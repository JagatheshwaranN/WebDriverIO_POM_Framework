const { assert } = require('chai')
const elementUtil = require('../util/element')

class UserManagementPage{

    // User management page locators
    get usermanagement_header(){
        return $("//h1[normalize-space()='System Users']")
    }
    get usermanagement_userName(){
        return $("//input[@id='searchSystemUser_userName']")
    }
    get usermanagement_search(){
        return $("//input[@id='searchBtn']")
    }
    get usermanagement_result(){
        return $("//table[@id='resultTable']//tr[1]//td[2]")
    }

    // User management page actions
    
    verifyUserManagementPageHeaderText(){
        return elementUtil.element_getText(this.usermanagement_header)
    }

    verifyUserSearchFunctionality(username){
        elementUtil.element_enterValue(this.usermanagement_userName,username)
        elementUtil.element_click(this.usermanagement_search)
        browser.pause(5000)
        elementUtil.element_displayed(this.usermanagement_result)
        const actualUserName = elementUtil.element_getText(this.usermanagement_result)
        assert.equal(username, actualUserName, 'User name is mismatch')
    }

}
module.exports = new UserManagementPage()
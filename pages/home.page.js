const elementUtil = require('../util/element')
const testData = require('../data/constants')
const mouseAction = require('../util/mouse.action')
const browserAction = require('../util/browser.action')

class HomePage{

    // Home page locators
    get home_logo(){
        return $("//img[@alt='OrangeHRM']")
    }
    get home_header(){
        return $("//h1[normalize-space()='Dashboard']")
    }
    get home_accountName(){
        return $('#welcome')
    }
    get home_AdminInTopNav(){
        return $("#menu_admin_viewAdminModule")
    }
    get home_UserManagementInTopNav(){
        return $("#menu_admin_UserManagement")
    }
    get home_UsersInTopNav(){
        return $("#menu_admin_viewSystemUsers")
    }

    // Home page actions

    getHomePageTitle(){
        return browserAction.browser_getPageTitle(testData.HOME_PAGE_TITLE)
    }

    verifyHomePageLogo(){
        return elementUtil.element_displayed(this.home_logo)
    }

    verifyHomePageHeaderText(){
        return elementUtil.element_getText(this.home_header)
    }

    verifyHomePageAccountName(){
        return elementUtil.element_displayed(this.home_accountName)
    }

    navigateToUserManagementPage(){
        mouseAction.element_hover(this.home_AdminInTopNav)
        mouseAction.element_hover(this.home_UserManagementInTopNav)
        elementUtil.element_click(this.home_UsersInTopNav)
    }

}
module.exports = new HomePage()
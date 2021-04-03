class BrowserAction{

    browser_getPageTitle(pageTitle){
        browser.waitUntil(function(){
            return (browser.getTitle() === pageTitle)
        }, 10000, 'Title is not displayed after the given time'
        )
        return browser.getTitle()
    }
    
    browser_goBack(){
        browser.back()
    }

    browser_goForward(){
        browser.forward()
    }

    browser_refresh(){
        browser.refresh()
    }

    browser_getWindow(){
        browser.getWindowHandle()
    }

    browser_getWindows(){
        browser.getWindowHandles()
    }

    browser_switchToWindow(handle){
        browser.switchToWindow(handle)
    }

    browser_createWindow(type){
        browser.createWindow(type)
    }

    browser_switchToFrame(id){
        browser.switchToFrame(id)
    }

    browser_switchToParentFrame(){
        browser.switchToParentFrame()
    }

    browser_minimize(){
        browser.minimizeWindow()
    }

    browser_fullSize(){
        browser.fullscreenWindow()
    }
}
module.exports = new BrowserAction()
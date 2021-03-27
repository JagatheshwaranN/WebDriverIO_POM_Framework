class ElementUtil{

    element_click(element){
     element.waitForDisplayed()
     element.click()   
    }

    element_enterValue(element, value){
        element.waitForDisplayed()
        element.setValue(value)
    }

    element_clearValue(element){
        element.waitForDisplayed()
        element.clear()
    }

    element_getText(element){
        element.waitForDisplayed()
        return element.getText()
    }

    element_displayed(element){
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    browser_getPageTitle(pageTitle){
        browser.waitUntil(function(){
            return (browser.getTitle() === pageTitle)
        }, 10000, 'Title is not displayed after the given time'
        )
        return browser.getTitle()
    }

}
module.exports = new ElementUtil()
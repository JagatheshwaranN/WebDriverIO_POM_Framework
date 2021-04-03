class WaitAction{

    browser_setTime(implicit, pageLoad, script){
        browser.setTimeouts(implicit, pageLoad, script)
    }

    browser_getTime(){
        browser.getTimeouts()
    }

    element_waitForClickable(element){
       element.waitForClickable({ timeout: 500 })
    }

    element_waitForDisplay(element){
        element.waitForDisplayed({ timeout: 500 })
    }

    element_waitForEnabled(element){
        element.waitForEnabled({ timeout: 500 })
    }

    element_waitForExist(element){
        element.waitForExist({ timeout: 500 });
    }

}
module.exports = new WaitAction()
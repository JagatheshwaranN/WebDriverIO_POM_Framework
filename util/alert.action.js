class AlertAction{

    alert_accept(){
        browser.acceptAlert()
    }

    alert_dismiss(){
        browser.dismissAlert()
    }

    alert_getText(){
        browser.getAlertText()   
    }

    alert_sendText(text){
        browser.sendAlertText(text)
    }
    
    alert_isOpen(){
         return browser.isAlertOpen();
    }
}
module.exports = new AlertAction()
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

}
module.exports = new ElementUtil()
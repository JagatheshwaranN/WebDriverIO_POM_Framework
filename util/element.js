const waitAction = require('../util/wait.action')

class ElementUtil{

    element_click(element){
    waitAction.element_waitForDisplay(element)
     element.click()   
    }

    element_enterValue(element, value){
        waitAction.element_waitForDisplay(element)
        element.setValue(value)
    }

    element_clearValue(element){
        waitAction.element_waitForDisplay(element)
        element.clear()
    }

    element_getText(element){
        waitAction.element_waitForDisplay(element)
        return element.getText()
    }

    element_displayed(element){
        waitAction.element_waitForDisplay(element)
        return element.isDisplayed()
    }

    element_selected(element){
        waitAction.element_waitForDisplay(element)
        return element.isSelected()
    }

    element_focused(element){
        waitAction.element_waitForDisplay(element)
        return element.isFocused()
    }

}
module.exports = new ElementUtil()
const waitUtil = require('../util/wait.action')

class ElementUtil{

    element_click(element){
        waitUtil.element_waitForDisplay(element)
        waitUtil.element_waitForClickable(element)
        element.click()   
    }

    element_enterValue(element, value){
        waitUtil.element_waitForDisplay(element)
        element.setValue(value)
    }

    element_clearValue(element){
        waitUtil.element_waitForDisplay(element)
        element.clear()
    }

    element_getText(element){
        waitUtil.element_waitForDisplay(element)
        return element.getText()
    }

    element_getValue(element){
        waitUtil.element_waitForDisplay(element)
        return element.getValue()
    }

    element_displayed(element){
        waitUtil.element_waitForDisplay(element)
        return element.isDisplayed()
    }

    element_displayedInViewPort(element){
        waitUtil.element_waitForDisplay(element)
        return element.isDisplayedInViewport()
    }

    element_selected(element){
        waitUtil.element_waitForDisplay(element)
        return element.isSelected()
    }

    element_focused(element){
        waitUtil.element_waitForDisplay(element)
        return element.isFocused()
    }

    element_enabled(element){
        waitUtil.element_waitForDisplay(element)
        return element.isEnabled()
    }

    element_exist(element){
        waitUtil.element_waitForDisplay(element)
        return element.isExisting()
    }

    element_clickable(element){
        waitUtil.element_waitForDisplay(element)
        waitUtil.element_waitForClickable(element)
        return element.isClickable()
    }

}
module.exports = new ElementUtil()
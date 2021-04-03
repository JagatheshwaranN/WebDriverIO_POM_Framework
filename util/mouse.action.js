const waitAction = require('../util/wait.action')
class MouseAction{

    element_hover(element){
        waitAction.element_waitForDisplay(element)
        element.moveTo()
    }

    element_rightClick(element){
        waitAction.element_waitForDisplay(element)
        element.click({ button: 'right' })
    }

    element_doubleClick(element){
        waitAction.element_waitForDisplay(element)
        element.doubleClick()
    }

    element_dragDrop(sourceElement, targetElement){
        sourceElement.waitForDisplayed()
        targetElement.waitForDisplayed()
        sourceElement.dragAndDrop(targetElement)
    }
}
module.exports = new MouseAction()
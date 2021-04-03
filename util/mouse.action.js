const waitUtil = require('../util/wait.action')
class MouseActionUtil{

    element_hover(element){
        waitUtil.element_waitForDisplay(element)
        element.moveTo()
    }

    element_rightClick(element){
        waitUtil.element_waitForDisplay(element)
        element.click({ button: 'right' })
    }

    element_doubleClick(element){
        waitUtil.element_waitForDisplay(element)
        element.doubleClick()
    }

    element_dragDrop(sourceElement, targetElement){
        sourceElement.waitForDisplayed()
        targetElement.waitForDisplayed()
        sourceElement.dragAndDrop(targetElement)
    }
    
}
module.exports = new MouseActionUtil()
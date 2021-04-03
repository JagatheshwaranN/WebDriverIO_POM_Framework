class MouseAction{

    element_hover(element){
        element.moveTo()
    }

    element_rightClick(element){
        element.click({ button: 'right' })
    }

    element_doubleClick(element){
        element.doubleClick()
    }

    element_dragDrop(sourceElement, targetElement){
        sourceElement.dragAndDrop(targetElement)
    }
}
module.exports = new MouseAction()
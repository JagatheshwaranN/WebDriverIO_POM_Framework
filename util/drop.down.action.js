class DropDownUtil{

    element_selectByAtrribute(element, attribute, option){
        element.selectByAttribute(attribute, option)
    }

    element_selectByVisibleText(element, text){
        element.selectByVisibleText(text)
    }

    element_selectByIndex(element, index){
        element.selectByIndex(index)
    }

    element_select(elements, option){
        let list = elements;
        console.log('Select dropdown length is : ', list.length);
        for(let i=0; i<list.length; i++){
            const element = list[i];
            console.log(element.getText());
            if(element.getText()==option){
                element.click();
                break;
            }
        }
    }
    
}
module.exports = new DropDownUtil()
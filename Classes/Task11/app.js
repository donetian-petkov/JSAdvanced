class Textbox {
    constructor (selector, regex) {
        this.selector = selector;
        this._invalidSymbols = regex;
        this._elements = document.querySelectorAll(selector);
        this._value = 'true';
    }

    get value() {
      this._value=document.querySelector(this.selector).value;
        return this._value;
    }

    set value(newValue){
        this._value=newValue;

        for (let element of document.querySelectorAll(this.selector)){
            element.value = this._value;
        }

    }

    get elements(){
        return this._elements;
    }

    isValid() {

        let boolValid = true;

        for (let element of this.elements ) {

            let value = element.value;

            if (this._invalidSymbols.test(value)) {
               boolValid = false;
            }
        }

        return boolValid;
    }

}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('textbox');


for (let input of inputs){
    input.addEventListener('change', (event) => {
        console.log(textbox.isValid());
        textbox.value = event.target.value;
    })
}

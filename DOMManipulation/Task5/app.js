function encodeAndDecodeMessages() {

    let [inputArea , outputArea] = Array.from(document.querySelectorAll('textarea'));

    let [encodeButton, decodeButton] = Array.from(document.querySelectorAll('button'));

    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);

    function encode(){
        let textToEncode = inputArea.value;
        let encodedText = '';

        for (let i = 0; i < textToEncode.length; i++) {
            let charCode = textToEncode.charCodeAt(i);
            let newLetter = String.fromCharCode(charCode + 1);
            encodedText+=newLetter;
        }

        outputArea.value=encodedText;
        inputArea.value='';
    }

    function decode(){
        let textToDecode = outputArea.value;
        let decodedText = '';

        for (let i = 0; i < textToDecode.length; i++) {
            let charCode = textToDecode.charCodeAt(i);
            let newLetter = String.fromCharCode(charCode - 1);
            decodedText+=newLetter;
        }

        outputArea.value=decodedText;
    }


}
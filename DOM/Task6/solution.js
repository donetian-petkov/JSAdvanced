function solve() {

    let input = document.getElementById('input');
    let textArray = input.value.split('.').filter(s => s!== '');
    let resultDiv = document.getElementById('output');


    while (textArray.length > 0){
        let text = textArray.splice(0,3).join(". ") + '.';
        let p = document.createElement('p');
        p.textContent = text;
        resultDiv.appendChild(p);
    }
}
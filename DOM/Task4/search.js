function search() {

    let inputWord = document.getElementById('searchText').value;
    let towns = Array.from(document.querySelectorAll('#towns li'));
    let match = document.getElementById('result');

    let count = 0;

    for (let town of towns) {
        if (town.textContent.includes(inputWord)){
            count++;
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
        } else {
            town.style.fontWeight = 'normal';
            town.style.textDecoration = 'none';
        }
    }

    match.textContent = `${count} matches found`;

}

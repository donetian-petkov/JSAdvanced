function getInfo() {
    //read input value
    //make request to server
    //parse response data
    //display data
    // error checking for request

    let stopId = document.getElementById('stopId').value;
    let stopNameElement = document.getElementById('stopName');
    let timeTableElement = document.getElementById('buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    fetch(url)
        .then(response => {
            timeTableElement.innerHTML='';
            if(response.status !== 200){
                throw new Error('Stop ID not found!');
            }
            return response.json();
        })
        .then(data => {
            stopNameElement.textContent = data.name;

            Object.entries(data.buses).forEach(b => {
                const liElement = document.createElement('li');
                liElement.textContent= `Bus ${b[0]} arrives in ${b[1]} minutes`;

                timeTableElement.appendChild(liElement);
            })
        })
        .catch(error => stopNameElement.textContent = 'Error');

}
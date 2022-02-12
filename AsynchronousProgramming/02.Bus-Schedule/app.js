function solve() {

    const label = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let stop = {
        next: 'depot'
    };


    async function depart() {
        //get information about the next stop
        departBtn.disabled = true;

        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        try {
            const res = await fetch(url);

            if (res.status !== 200) {
                throw new Error('Could not depart!');
            }

            stop = await res.json();
        } catch (error){
            console.log(error.message);
        }

        label.textContent = `Next stop ${stop.name}`;

        //activate other button
        arriveBtn.disabled = false;

    }

    function arrive() {
        // display name of current stop
        arriveBtn.disabled = true;
        label.textContent = `Arriving at ${stop.name}`;


        //activate other button
        departBtn.disabled = false;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();
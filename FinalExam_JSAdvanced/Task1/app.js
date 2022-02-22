function solve() {
    let firstNameInput = document.getElementById('fname');
    let secondNameInput = document.getElementById('lname');
    let emailInput = document.getElementById('email');
    let birthInput = document.getElementById('birth');
    let positionInput = document.getElementById('position');
    let salaryInput = document.getElementById('salary');
    let tBody = document.getElementById('tbody');
    let budget = 0;
    let salaryNumber =0;

    let inputArray = [firstNameInput, secondNameInput, emailInput, birthInput, positionInput, salaryInput];

    document.getElementById('add-worker').addEventListener('click',addWorker );

    function addWorker(event) {

        event.preventDefault();

        if (inputArray.some(element => element.value === '')){
            return;
        }

        let tr = document.createElement('tr');

        let firstName = document.createElement('td');
        firstName.textContent = firstNameInput.value;

        let secondName = document.createElement('td');
        secondName.textContent = secondNameInput.value;

        let email = document.createElement('td');
        email.textContent = emailInput.value;

        let birth = document.createElement('td');
        birth.textContent = birthInput.value;

        let position = document.createElement('td');
        position.textContent = positionInput.value;

        let salary = document.createElement('td');
        salary.textContent = salaryInput.value;

        tr.appendChild(firstName);
        tr.appendChild(secondName);
        tr.appendChild(email);
        tr.appendChild(birth);
        tr.appendChild(position);
        tr.appendChild(salary);

        let td = document.createElement('td');

        let firedButton = document.createElement('button');
        firedButton.className = 'fired';
        firedButton.textContent='Fired';
        firedButton.addEventListener('click',fireWorker);

        let editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', editWorker);

        td.appendChild(firedButton);
        td.appendChild(editButton);

        tr.appendChild(td);
        tBody.appendChild(tr);

        budget = Number(document.getElementById('sum').textContent);
        salaryNumber = Number(salaryInput.value);

        document.getElementById('sum').textContent = `${(budget + salaryNumber).toFixed(2)}`;

        inputArray.forEach(input => input.value='');


    }

    function fireWorker(event) {

        let tr = event.target.parentElement.parentElement;

        salaryNumber = Number(tr.getElementsByTagName('td')[5].textContent);
        budget = Number(document.getElementById('sum').textContent);

        document.getElementById('sum').textContent = `${Number(budget - salaryNumber).toFixed(2)}`;

        tr.remove();

    }

    function editWorker(event){

        let tr = event.target.parentElement.parentElement;
        let tdArray = tr.getElementsByTagName('td');

       for (let i = 0; i < 6; i ++){
           inputArray[i].value = tdArray[i].textContent;
       }

        budget = Number(document.getElementById('sum').textContent);
        salaryNumber = Number(salaryInput.value);

        document.getElementById('sum').textContent = `${(budget - salaryNumber).toFixed(2)}`;

        tr.remove();

    }

}
solve()
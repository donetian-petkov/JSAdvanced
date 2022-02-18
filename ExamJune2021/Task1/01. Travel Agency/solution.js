window.addEventListener('load', solution);

function solution() {

  let submitButton = document.getElementById('submitBTN');
  let previewUl = document.getElementById('infoPreview');
  let editButton = document.getElementById('editBTN');
  let continueButton = document.getElementById('continueBTN');
  let block = document.getElementById('block');

  submitButton.addEventListener('click', submitForm);

  function submitForm(event) {

    let fullNameInput = event.target.parentElement.querySelector('#fname');
    let emailInput = event.target.parentElement.querySelector('#email');
    let phoneNumberInput = event.target.parentElement.querySelector('#phone');
    let addressInput = event.target.parentElement.querySelector('#address');
    let postalCodeInput = event.target.parentElement.querySelector('#code');

    if (fullNameInput.value==='' || emailInput.value===''){
      return;
    }

    submitButton.disabled = true;

    let inputObject = {
      fullName: fullNameInput.value,
      email: emailInput.value,
      phoneNumber: phoneNumberInput.value,
      address: addressInput.value,
      postalCode: Number(postalCodeInput.value)
    };


    let fullName = document.createElement('li');
    fullName.textContent = `Full Name: ${inputObject.fullName}`;

    let email = document.createElement('li');
    email.textContent = `Email: ${inputObject.email}`;

    let phoneNumber = document.createElement('li');
    phoneNumber.textContent = `Phone Number: ${inputObject.phoneNumber}`;

    let address = document.createElement('li');
    address.textContent = `Address: ${inputObject.address}`;

    let postalCode = document.createElement('li');
    postalCode.textContent = `Postal Code: ${inputObject.postalCode}`;

    previewUl.appendChild(fullName);
    previewUl.appendChild(email);
    previewUl.appendChild(phoneNumber);
    previewUl.appendChild(address);
    previewUl.appendChild(postalCode);

    fullNameInput.value='';
    emailInput.value='';
    phoneNumberInput.value='';
    addressInput.value='';
    postalCodeInput.value='';

    editButton.disabled = false;
    editButton.addEventListener('click',editForm);
    continueButton.disabled = false;
    continueButton.addEventListener('click', completeForm);

    function editForm(){
      fullNameInput.value=inputObject.fullName;
      emailInput.value = inputObject.email;
      phoneNumberInput.value=inputObject.phoneNumber;
      addressInput.value = inputObject.address;
      postalCodeInput.value = inputObject.postalCode;

      editButton.disabled = true;
      continueButton.disabled=true;
      submitButton.disabled=false;

      previewUl.innerHTML='';

    }

    function completeForm(){

      block.innerHTML='<h3>Thank you for your reservation!</h3>';

    }

  }

}

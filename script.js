const holderName = document.getElementById('holder-name'),
      number = document.getElementById('card-number'),
      expDateMonth = document.getElementById('exp-date-mm'),
    //   expDateYear = document.getElementById('exp-date-yy'),
      cvc = document.getElementById('card-cvc'),
    //   error = document.getElementById('err-msg'),
      confirmBtn = document.getElementById('my-form'),
      contBtn = document.getElementById('continue'),
      formSection = document.querySelector('.card-form'),
      complete = document.querySelector('.complete-container');
    //   form = document.querySelector(form);

function required (field, e) {
    let isValid = true

    if (field.value == '') {
        field.nextElementSibling.innerHTML = "Please enter a valid input!";
        field.style.border = '1px solid var(--red-input-error)';
        e.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = ' ';
        field.style.border = '1px solid var(--dark-grayish-violet)';
        return true;
    }
}

/* function load (e) {
    // formSection.style.display = 'none';
    // complete.style.display = 'block'
    if (required(field, e) == true ) {
        window.onload.href = '/success.html';
        return true
    } else {
        e.preventDefault();
        return false
    }
} */
    

function validateName (e) {
    if (!holderName.value.match(/^[A-Za-z]+$/)) {
        holderName.nextElementSibling.innerHTML = 'Please enter text only!';
        holderName.style.border = '1px solid var(--red-input-error)';
        e.preventDefault();
        return false;
    } else {
        holderName.nextElementSibling.innerHTML = ' ';
        holderName.style.border = '1px solid var(--dark-grayish-violet)';
        return true;
    }
}

function validateCardNumber  (e) {
    if (!number.value.match(/^[0-9]{16}$/)) {
        number.nextElementSibling.innerHTML = 'Please enter valid numbers only!';
        number.style.border = '1px solid var(--red-input-error)';
        e.preventDefault();
        return false;
    } else {
        number.nextElementSibling.innerHTML = ' ';
        number.style.border = '1px solid var(--dark-grayish-violet)';
        return true;
    }
}



function validateData (e) {
    required(holderName, e);
    required(number, e);
    required(expDateMonth, e);
    required(cvc, e);
    validateName(e);
    validateCardNumber(e);

    if (isValid) {
        confirmBtn.submit();
        window.location.href = 'success.html'
    }
    return true
};

confirmBtn.addEventListener('submit', validateData);

// /^[A-Za-z]+$/ /^[0-9]+$/ /^[a-z0-9]+$/i 
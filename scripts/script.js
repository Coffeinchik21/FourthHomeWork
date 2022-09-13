const formInputs = document.querySelector('.registration-form'),
    inputs = document.querySelectorAll('.registration-form__input-fields__input'),
    inpEmail = document.querySelector('.registration-form__input-fields__input--input__email'),
    inpPass = document.querySelector('.registration-form__input-fields__input--input__choose-pass'),
    inpConfirmPass = document.querySelector('.registration-form__input-fields__input--input__confirm-pass'),
    inpCheck = document.querySelector('.registration-form__checkbox'),
    btn = document.querySelector('.registration-form__submit--button');

btn.setAttribute('disabled', true);
btn.style.opacity = 0.4;
function validateEmail(email) {
    const valE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valE.test(String(email).toLowerCase());
}


formInputs.addEventListener("click", function () {
    inputs.forEach(function (input) {
        if (input.value === '') {
            btn.setAttribute('disabled', true);
            btn.style.opacity = 0.4;
        } else {
            btn.removeAttribute('disabled');
            btn.style.opacity = 1;
        }
    });
});

formInputs.addEventListener("submit", function () {
    const valInpEmail = inpEmail.value,
        valInpPass = inpPass.value,
        valInpConfirmPass = inpConfirmPass.value,
        emptyInputs = Array.from(inputs).filter(input => input.value === '');


    inputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('Input not field');
        return false;
    }

    if (!validateEmail(valInpEmail)) {
        console.log("Email not valid");
        inpEmail.classList.add('error');
        return false;
    } else {
        inpEmail.classList.remove('error');
    }

    if (valInpPass !== valInpConfirmPass) {
        console.log("Invalid password");
        inpPass.classList.add('error');
        inpConfirmPass.classList.add('error');
        return false;
    } else {
        inpPass.classList.remove('error');
        inpConfirmPass.classList.remove('error');
    }

    if (inpCheck.checked !== true) {
        console.log("Checkbox uncheck");
        inpCheck.classList.add('error');
        return false;
    } else {
        inpCheck.classList.remove('error');
    }
    formInputs.removeEventListener("submit");
});
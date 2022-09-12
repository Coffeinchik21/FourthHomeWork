const formInputs = document.querySelector('.registration-form');
const inpFname = document.querySelector('.registration-form__input-fields__input--input__fname');
const inpLname = document.querySelector('.registration-form__input-fields__input--input__lname');
const inpEmail = document.querySelector('.registration-form__input-fields__input--input__email');
const inpPass = document.querySelector('.registration-form__input-fields__input--input__choose-pass');
const inpConfirmPass = document.querySelector('.registration-form__input-fields__input--input__confirm-pass');
const inpCheck = document.querySelector('.registration-form__checkbox');
const btn = document.querySelector('.registration-form__submit--button');

btn.setAttribute('disabled', true);
btn.style.opacity = 0.4;

formInputs.oninput = function () {
    if (inpFname.value.length < 2) {
        btn.setAttribute('disabled', true);
        btn.style.opacity = 0.4;
    } else if (inpLname.value.length < 2 && inpEmail.value.length < 2) {
        btn.setAttribute('disabled', true);
        btn.style.opacity = 0.4;
    }
    else if (inpEmail.value.length < 2) {
        btn.setAttribute('disabled', true);
        btn.style.opacity = 0.4;
    }
    else if (inpPass.value.length < 2) {
        btn.setAttribute('disabled', true);
        btn.style.opacity = 0.4;
    }
    else if (inpConfirmPass.value.length < 2) {
        btn.setAttribute('disabled', true);
        btn.style.opacity = 0.4;
    }
    else if (inpCheck.checked !== true) {
        btn.setAttribute('disabled', true);
        btn.style.opacity = 0.4;
    }
    else {
        btn.removeAttribute('disabled');
        btn.style.opacity = 1;
    }


};
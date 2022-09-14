const registerForm = {
    name: document.body.querySelector('.registration-form__input-fields__input--input__fname'),
    lastName: document.body.querySelector('.registration-form__input-fields__input--input__lname'),
    email: document.body.querySelector('.registration-form__input-fields__input--input__email'),
    pass: document.body.querySelector('.registration-form__input-fields__input--input__choose-pass'),
    confirmPass: document.body.querySelector('.registration-form__input-fields__input--input__confirm-pass'),
    checkBox: document.body.querySelector('.registration-form__checkbox')
};

const submitBtn = document.body.querySelector('.registration-form__submit--button');

submitBtn.style.pointerEvents = 'none';
submitBtn.style.opacity = '0.4';

const chekcInputsFieldErorr = {
    nameError: true,
    lastNameErorr: true,
    emailError: true,
    passErorr: true,
    confirmPassError: true,
    checkBoxError: false
};

registerForm.name.addEventListener('blur', (e) => {
    nameValidation();
    chekErrors(chekcInputsFieldErorr);
});

registerForm.lastName.addEventListener('blur', (e) => {
    lastNameValidation();
    chekErrors(chekcInputsFieldErorr);
});

registerForm.email.addEventListener('blur', (e) => {
    emailValidation();
    chekErrors(chekcInputsFieldErorr);
});

registerForm.pass.addEventListener('blur', (e) => {
    passValidation();
    confirmPassValidation();
    chekErrors(chekcInputsFieldErorr);
});

registerForm.confirmPass.addEventListener('blur', (e) => {
    confirmPassValidation();
    chekErrors(chekcInputsFieldErorr);
});

registerForm.checkBox.addEventListener('change', (e) => {
    checkBoxChecked();
    chekErrors(chekcInputsFieldErorr);
});

function nameValidation() {
    if (registerForm.name.value.length <= 0) {
        registerForm.name.classList.add('error');
        chekcInputsFieldErorr.nameError = false;
    } else {
        registerForm.name.classList.remove('error');
        chekcInputsFieldErorr.nameError = true;
    }
};

function lastNameValidation() {
    if (registerForm.lastName.value.length <= 0) {
        registerForm.lastName.classList.add('error');
        chekcInputsFieldErorr.lastNameErorr = false;
    } else {
        registerForm.lastName.classList.remove('error');
        chekcInputsFieldErorr.lastNameErorr = true;
    }
};

function emailValidation() {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regexEmail.test(registerForm.email.value)) {
        registerForm.email.classList.add('error');
        chekcInputsFieldErorr.emailError = false;
    } else {
        registerForm.email.classList.remove('error');
        chekcInputsFieldErorr.emailError = true;
    }
};

function passValidation() {
    if (registerForm.pass.value.length <= 0) {
        registerForm.pass.classList.add('error');
        chekcInputsFieldErorr.passErorr = false;
    } else {
        registerForm.pass.classList.remove('error');
        chekcInputsFieldErorr.passErorr = true;
    }
};

function confirmPassValidation() {
    if (registerForm.confirmPass.value !== registerForm.pass.value || registerForm.confirmPass.value.length <= 0) {
        registerForm.confirmPass.classList.add('error');
        chekcInputsFieldErorr.confirmPassError = false;
    } else {
        registerForm.confirmPass.classList.remove('error');
        chekcInputsFieldErorr.confirmPassError = true;
    }
};

function checkBoxChecked() {
    if (!registerForm.checkBox.checked) {
        registerForm.checkBox.classList.add('error');
        chekcInputsFieldErorr.checkBoxError = false;
    } else {
        registerForm.checkBox.classList.remove('error');
        chekcInputsFieldErorr.checkBoxError = true;
    }
}

function chekErrors(obj) {
    if (!obj.nameError || !obj.lastNameErorr || !obj.emailError || !obj.passErorr || !obj.confirmPassError || !obj.checkBoxError) {
        submitBtn.style.pointerEvents = 'none';
        submitBtn.style.opacity = '0.4';
    } else {
        submitBtn.style.pointerEvents = '';
        submitBtn.style.opacity = '1';
    }
}
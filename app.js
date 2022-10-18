const form = document.querySelector('form');
const inputs = document.querySelectorAll('.input');
const errorMessage = document.querySelectorAll('.error-message');

const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;


// class 'error' a los input

form.addEventListener('submit', () => {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            errorMessage[i].innerHTML = 'This field can\'t be blank';
            inputs[i].classList.add('error');
        } else if ((inputs[i].name === 'email') &&
                   ((inputs[i].value.indexOf('@') < 0) || (inputs[i].value.indexOf('.com') < 0))) {

            errorMessage[i].innerHTML = 'Please provide a valid email';
            inputs[i].classList.add('error');

        } else if ((inputs[i].name === 'password') &&
                   ((inputs[i].length < 8) ||
                    (inputs[i].value.match(lowerCaseLetters) < 1) ||
                    (inputs[i].value.match(upperCaseLetters) < 1) ||
                    (inputs[i].value.match(numbers) < 1))
        ) {
            errorMessage[i].innerHTML = 'The password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number';
            inputs[i].classList.add('error');
        } else {
            errorMessage[i].innerHTML = '';
            inputs[i].classList.remove('error');
        }
    }
});
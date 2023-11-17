const form = document.querySelector('#form');
const username = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPw = document.querySelector('#confirm-pw');
const number = document.querySelector('#number');
const age = document.querySelector("#age");
const country = document.querySelector('#country');
const errorMsg = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
    if(!username.value || !email.value || !password.value || !confirmPw.value
        || !number.value || !age.value){
        errorMsg.innerHTML = 'Please fill all fields';
        e.preventDefault();
    } 
    else if(country.value === ''){
        errorMsg.innerHTML = 'Please select your country';
        e.preventDefault();
    }
    else if(username.value.length < 3 || username.value.length > 25){
        errorMsg.innerHTML = 'Name length must be between 3 and 25 characters';
        e.preventDefault();
    }
    else if(email.value.endsWith('@gmail.com') == false){
        errorMsg.innerHTML = 'Please input a valid email (must end with @gmail.com)';
        e.preventDefault();
    }
    else if(password.value.length <= 5){
        errorMsg.innerHTML = 'Password length must be greater than 5';
        e.preventDefault();
    }
    else if(password.value != confirmPw.value){
        errorMsg.innerHTML = 'Make sure your password and confirm password are the same';
        e.preventDefault();
    }
    else if(number.value.length < 3 || number.value.length > 15){
        errorMsg.innerHTML = 'Please input a valid phone number (must be between 4 and 15 digits)'
        e.preventDefault();
    }
    else if(age.value > 100 || age.value < 0){
        errorMsg.innerHTML = 'Please input a valid age';
        e.preventDefault();
    }
    else if(age.value < 13){
        errorMsg.innerHTML = 'Make sure you are older than 12 years old';
        e.preventDefault();
    }
    else{
        alert(`Welcome to MTgraphy, ${username.value}!`);
    }
})
let loginInput = document.getElementById('login');
let loginMessage = document.getElementById('login-message');

loginInput.addEventListener("input", (ev) => {
    let value = ev.target.value;
    let symbolsLength = value.length > 8;
    let symbolDot = value.includes('.');
    let symbolLine = value.includes('_');
    let firstSymbol = value.length > 0 && value[0] === value[0].toLowerCase();
    
    if (symbolsLength && (symbolDot || symbolLine) && firstSymbol) {
        loginMessage.innerText = "RIGHT FORMAT";
    } else {
        loginMessage.innerText = "WRONG FORMAT";
    }
});


let passwordInput = document.getElementById('password');
let passwordMessage = document.getElementById('password-message');

passwordInput.addEventListener("input", (ev) => {
    let value = ev.target.value;
    let symbolsLength = value.length > 8;
    let symbolDot = value.includes('.');
    let symbolLine = value.includes('_');
    let firstSymbol = value.length > 0 && value[0] === value[0].toUpperCase();
    let numberCheck = value.split('').some((item) => Number.isInteger(parseInt(item)));

    if (symbolsLength && (symbolDot || symbolLine) && firstSymbol && numberCheck) {
        passwordMessage.innerText = "RIGHT FORMAT";
    } else {
        passwordMessage.innerText = "WRONG FORMAT";
    }
});
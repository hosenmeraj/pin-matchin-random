function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinStrin = pin + '';
    if (pinStrin.length == 4) {
        return pin;
    }
    if (number == "<") {
        calcInput.value = parseInt(calcInput.value / 10);
    }
    else {
        return getPin();
    }
}
function genaratePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
};

//key  type
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessege = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successMessege.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        failError.style.display = 'block';
        successMessege.style.display = 'none';
        const tryLeft = document.getElementById('try');
        const tryCount = tryLeft.innerText;
        tryLeft.innerText = parseInt(tryCount) - 1;
        if (tryLeft.innerText < 0) {
            failError.style.display = 'none';
            alert('you do not have three more time');
            tryLeft.innerText = 0;
        }
    }
}

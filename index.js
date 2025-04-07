let currentInput = '0';
let previousInput = '';
let operation = null;
let resetScreen = false;

const display = document.getElementById('display');
const themeButtons = document.querySelectorAll('.theme-btn');


function updateDisplay() {
    display.textContent = currentInput;
}

function appendToDisplay(number) {
    if (currentInput === '0' || resetScreen) {
        currentInput = '';
        resetScreen = false;
    }
    currentInput += number;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    updateDisplay();
}

function backspace() {
    if (currentInput.length === 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

function setOperation(op) {
    if (operation !== null) calculate();
    previousInput = currentInput;
    operation = op;
    resetScreen = true;
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operation = null;
    updateDisplay();
}


document.querySelectorAll('.operator').forEach(button => {
    if (button.textContent !== 'C' && button.textContent !== '←' && button.textContent !== '=') {
        button.addEventListener('click', () => {
            setOperation(button.textContent);
        });
    }
});


themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.body.className = button.dataset.theme;
    });
});


updateDisplay();
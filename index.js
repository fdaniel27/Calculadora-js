const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');


buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id === 'clear') {
            display.innerText = '';
        } else if (item.id === 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText !== '' && item.id === 'equal') {
            try {
                display.innerText = eval(display.innerText);
            } catch (e) {
                display.innerText = 'Erro';
                setTimeout(() => (display.innerText = ''), 2000);
            }
        } else if (display.innerText === '' && item.id === 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    };
});


const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const themes = ['dark', 'blue', 'pink'];
let currentThemeIndex = 0;

themeToggleBtn.onclick = () => {
    calculator.classList.remove(...themes); 
    currentThemeIndex = (currentThemeIndex + 1) % (themes.length + 1); 

    if (currentThemeIndex > 0) {
        calculator.classList.add(themes[currentThemeIndex - 1]);
    }

    themeToggleBtn.classList.toggle('active');
};

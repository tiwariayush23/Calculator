let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');
let realTimeScreenValue = [];

clearbtn.addEventListener("click", () => {
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = "rgba(150, 150, 150, 0.87)";
});

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!btn.id.match("erase")) {
            realTimeScreenValue.push(btn.value);
            console.log(realTimeScreenValue);
            currentInput.innerHTML = realTimeScreenValue.join('');

            if (btn.classList.contains('num_btn')) {
                calculateResult();
            }
        }

        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            calculateResult();
        }

        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
            calculateResult();
        }
    });
});

function calculateResult() {
    try {
        const result = Function('"use strict";return (' + realTimeScreenValue.join('') + ')')();
        // Set the desired precision, in this case, 5 decimal places
        answerScreen.innerHTML = result.toFixed(5);
    } catch (error) {
        answerScreen.innerHTML = 'Error';
    }
}

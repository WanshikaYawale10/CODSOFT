const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const toggleTheme = document.getElementById('toggle-theme');

let currentInput = '';
let resultDisplayed = false;

// Button clicks
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (button.id === 'clear') {
      currentInput = '';
      display.textContent = '0';
    } else if (button.id === 'equals') {
      try {
        // Add closing parenthesis if missing
        let openParens = (currentInput.match(//g) || []).length;
        let closeParens = (currentInput.match(//g) || []).length;
        while (openParens > closeParens) {
          currentInput += ')';
          closeParens++;
        }

        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
      } catch (e) {
        display.textContent = 'Error';
        currentInput = '';
      }
    } else {
      if (resultDisplayed && !isNaN(value)) {
        currentInput = value;
        resultDisplayed = false;
      } else {
        currentInput += value;
      }
      display.textContent = currentInput;
    }
  });
});

// Theme toggle
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleTheme.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});


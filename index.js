function calculate() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const errorElement = document.getElementById('error');
    const resultElement = document.getElementById('result');

    // Reset previous messages
    errorElement.textContent = '';
    resultElement.textContent = '';

    // Input validation
    if (isNaN(num1) || isNaN(num2)) {
        errorElement.textContent = 'Please enter valid numbers!';
        return;
    }
     // Calculation logic
    let result;
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 === 0) {
                errorElement.textContent = 'Cannot divide by zero!';
                return;
            }
            result = num1 / num2;
            break;
        default:
            errorElement.textContent = 'Invalid operation selected!';
            return;
    }

    // Display result
    resultElement.textContent = result;
}
document.addEventListener("DOMContentLoaded", () => {
    // Get the DOM elements
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");
    const resultDiv = document.getElementById("result");

    // Function to update the result
    function updateResult(result) {
        resultDiv.textContent = `Result: ${result}`;
    }

    // Prevent default form submission and perform the calculation
    document.getElementById("addButton").addEventListener("click", (event) => {
        event.preventDefault();
        const result = parseFloat(number1.value) + parseFloat(number2.value);
        updateResult(result);
    });

    document.getElementById("subtractButton").addEventListener("click", (event) => {
        event.preventDefault();
        const result = parseFloat(number1.value) - parseFloat(number2.value);
        updateResult(result);
    });

    document.getElementById("multiplyButton").addEventListener("click", (event) => {
        event.preventDefault();
        const result = parseFloat(number1.value) * parseFloat(number2.value);
        updateResult(result);
    });

    document.getElementById("divideButton").addEventListener("click", (event) => {
        event.preventDefault();
        const divisor = parseFloat(number2.value);
        if (divisor === 0) {
            updateResult("Error: Division by zero");
        } else {
            const result = parseFloat(number1.value) / divisor;
            updateResult(result);
        }
    });
});

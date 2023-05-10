let num1, num2;

num1 = document.getElementById("num1-el");
num2 = document.getElementById("num2-el");

let result = document.getElementById("res-el");

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


function add(){
    let ele1 = Number(num1.value);
    let ele2 = Number(num2.value);

    result.textContent = "Result: " + (ele1 + ele2);
}

function subtract(){
    let ele1 = Number(num1.value);
    let ele2 = Number(num2.value);

    result.textContent = "Result: " + (ele1 - ele2);
}

function divide(){
    let ele1 = Number(num1.value);
    let ele2 = Number(num2.value);

    result.textContent = "Result: " + (ele1 / ele2);
}

function multiply(){
    let ele1 = Number(num1.value);
    let ele2 = Number(num2.value);

    result.textContent = "Result: " + (ele1 * ele2);
}
// sum function
function sum(a, b) {
    return a + b;
}
//subtract function
function subtract(a, b) {
    return a - b;
}
//multiply function
function multiply(a, b) {
    return a * b;
}
//square function
function square(a) {
    return Math.sqrt(a);
}
// percentage function
function percentage(a, b) {
    return (a / 100) * b;
}

//divide function
function divide(a, b) {
    return a / b;
}

// operate function
function operate(sign, a, b) {
    if (sign === '+') {
        return sum(a, b);
    } else if (sign === "−") {
        return subtract(a, b);
    } else if (sign === "×") {
        return multiply(a, b);
    } else if (sign === "%") {
        return percentage(a, b);
    } else if (sign === "÷") {
        return divide(a, b);
    }
}


let operation = "";
let firstStr = "";
let secondStr = "";
let result = null;
let bool = false;
let = 0;


/* Get the elements */
let resultBox = document.querySelector('.resultBox');
const buttons = document.querySelectorAll('.btn');
const operatorButton = document.querySelectorAll('.operator');
const acButton = document.querySelector('.delete');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal')


/* listening to  numbers */
buttons.forEach(button => {
    button.addEventListener('click', numbers => {
        // if no operator is inserted start copying the numbers and display it
        if (operation.length === 0) {
            firstStr += button.value;
            resultBox.innerHTML = firstStr;
            // if there's one operator start copying the second number and display it 
        } else if (operation.length === 1) {
            secondStr += button.value;
            resultBox.innerHTML = secondStr;
        }
    });
});


/* listening to operators */
operatorButton.forEach(operator => {
    operator.addEventListener('click', sign => {
        //if there's no number inserted let display empty, else start copying operators
        if (firstStr.length === 0) {
            resultBox.innerHTML = "";
        } else {
            operation += operator.value;
        }
        // if there's data to calculate call calculation
        if (operation.length === 2 && firstStr != "" && secondStr != "") {
            calculateWithSign();
        }
    });
});


/*listening to C, AC and Equals button*/
acButton.addEventListener('click', () => {
    deleteAll();
});


clearButton.addEventListener('click', () => {
    clear();
});


equalButton.addEventListener('click', () => {
    //if equal button is pressed and there's no number let display empty
    if (firstStr === "") {
        console.log("ERROR no number entered");
        resultBox.innerHTML = "";
    }
    // check if all data is right othersiwe clean the calculator
    else if (firstStr === "" || secondStr === "" || operation.length > 2) {
        console.log("ERROR no data to calculate")
        resultBox.innerHTML = "";
        deleteAll();
    } else {
        // call the calculation
        calculateWithEqual();
    }
});


// hangle data types and call operate function
function calculateWithEqual() {
    firstStr = parseFloat(firstStr);
    secondStr = parseFloat(secondStr);
    result = operate(operation.charAt(0), firstStr, secondStr)
    result = Math.round(result * 100) / 100;
    resultBox.innerHTML = result;
    operation = "";
    secondStr = "";
    firstStr = result;
}


//delete all variables and display nothing
function deleteAll() {
    firstStr = "";
    secondStr = "";
    result = "";
    operation = "";
    resultBox.innerHTML = "";
}

//clear input no results
function clear() {
    //clear first string 
    if (firstStr != "" && operation.length === 0) {
        // do not let clear the result;
        if(firstStr === result){
            console.log("ERROR, clear works with input not result");
        }else {
            let temp = firstStr.slice(0, -1);
            firstStr = temp;
            resultBox.innerHTML = temp;
        }
       
    }
    // if clear lets a negative sign after clear the last number clear it.
    //clear second string
    if (secondStr != "" && operation.length === 1) {
        let temp1 = secondStr.slice(0, -1);
        secondStr = temp1;
        resultBox.innerHTML = temp1;

    }
}


// same function as calculate but retunrs the first item of the operation string
function calculateWithSign() {
    firstStr = parseFloat(firstStr);
    secondStr = parseFloat(secondStr);
    result = operate(operation.charAt(0), firstStr, secondStr);
    result = Math.round(result * 100) / 100;
    resultBox.innerHTML = result;
    operation = operation.substring(1);
    secondStr = "";
    firstStr = result;
}